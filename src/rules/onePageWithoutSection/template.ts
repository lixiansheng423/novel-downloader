import { getImageAttachment } from "../../lib/attachments";
import { cleanDOM } from "../../lib/cleanDOM";
import { getHtmlDOM } from "../../lib/http";
import { PublicConstructor } from "../../lib/misc";
import { log } from "../../log";
import { Book, BookAdditionalMetadate, Chapter } from "../../main";
import { BaseRuleClass } from "../../rules";
import { introDomHandle } from "../lib/common";

interface MkRuleClassOptions {
  bookUrl: string;
  bookname: string;
  author: string;
  introDom: HTMLElement;
  introDomPatch: (introDom: HTMLElement) => HTMLElement;
  coverUrl: string | null;
  aList: NodeListOf<Element>;
  getContentFromUrl?: (
    chapterUrl: string,
    chapterName: string | null,
    charset: string
  ) => Promise<HTMLElement | null>;
  getContent?: (doc: Document) => HTMLElement | null;
  contentPatch: (content: HTMLElement) => HTMLElement;
}
export function mkRuleClass(
  optionis: MkRuleClassOptions
): PublicConstructor<BaseRuleClass> {
  const {
    bookUrl,
    bookname,
    author,
    introDom,
    introDomPatch,
    coverUrl,
    aList: cos,
    getContentFromUrl,
    getContent,
    contentPatch,
  } = optionis;
  return class extends BaseRuleClass {
    public constructor() {
      super();
      this.imageMode = "TM";
    }

    public async bookParse() {
      const [introduction, introductionHTML, introCleanimages] =
        await introDomHandle(introDom, introDomPatch);

      const additionalMetadate: BookAdditionalMetadate = {};
      if (coverUrl) {
        getImageAttachment(coverUrl, this.imageMode, "cover-")
          .then((coverClass) => {
            additionalMetadate.cover = coverClass;
          })
          .catch((error) => log.error(error));
      }

      const chapters: Chapter[] = [];
      let chapterNumber = 0;
      for (const aElem of Array.from(cos) as HTMLAnchorElement[]) {
        chapterNumber++;
        const chapterName = aElem.innerText;
        const chapterUrl = aElem.href;
        const isVIP = false;
        const isPaid = false;
        const chapter = new Chapter(
          bookUrl,
          bookname,
          chapterUrl,
          chapterNumber,
          chapterName,
          isVIP,
          isPaid,
          null,
          null,
          null,
          this.chapterParse,
          this.charset,
          { bookname }
        );
        chapters.push(chapter);
      }

      const book = new Book(
        bookUrl,
        bookname,
        author,
        introduction,
        introductionHTML,
        additionalMetadate,
        chapters
      );
      return book;
    }
    public async chapterParse(
      chapterUrl: string,
      chapterName: string | null,
      isVIP: boolean,
      isPaid: boolean,
      charset: string,
      options: object
    ) {
      let content;
      if (getContentFromUrl !== undefined) {
        content = await getContentFromUrl(chapterUrl, chapterName, charset);
      } else if (getContent !== undefined) {
        const doc = await getHtmlDOM(chapterUrl, charset);
        content = getContent(doc);
      }
      if (content) {
        content = contentPatch(content);
        const { dom, text, images } = await cleanDOM(content, "TM");
        return {
          chapterName,
          contentRaw: content,
          contentText: text,
          contentHTML: dom,
          contentImages: images,
          additionalMetadate: null,
        };
      }
      return {
        chapterName,
        contentRaw: null,
        contentText: null,
        contentHTML: null,
        contentImages: null,
        additionalMetadate: null,
      };
    }
  };
}