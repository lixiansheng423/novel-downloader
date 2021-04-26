// ==UserScript==
// @name        小说下载器
// @version     3.4.6.1619462679719
// @author      bgme
// @description 一个可扩展的通用型小说下载器。
// @supportURL  https://github.com/yingziwu/novel-downloader
// @match       *://www.ciweimao.com/chapter-list/*
// @match       *://book.sfacg.com/Novel/*/MainIndex/
// @match       *://book.qidian.com/info/*
// @match       *://www.uukanshu.com/b/*/
// @match       *://www.yruan.com/article/*.html
// @match       *://www.biquwoo.com/bqw*/
// @match       *://www.shuquge.com/txt/*/index.html
// @match       *://www.dingdiann.net/ddk*/
// @match       *://www.xkzw.org/xkzw*/
// @match       *://www.266ks.com/*/
// @match       *://www.266ks.com/*/index*.html
// @match       *://www.hetushu.com/book/*/index.html
// @match       *://www.shouda8.com/*/
// @match       *://www.shouda88.com/*/
// @match       *://www.gebiqu.com/biquge_*/
// @match       *://www.meegoq.com/book*.html
// @match       *://www.viviyzw.com/book*.html
// @match       *://www.xiaoshuodaquan.com/*/
// @match       *://www.jjwxc.net/onebook.php?novelid=*
// @match       *://book.zongheng.com/showchapter/*.html
// @match       *://huayu.zongheng.com/showchapter/*.html
// @match       *://www.17k.com/list/*.html
// @match       *://www.shuhai.com/book/*.htm
// @match       *://mm.shuhai.com/book/*.htm
// @namespace   https://blog.bgme.me
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABjCAYAAAH1Iv5EAAAABGdBTUEAALGPC/xhBQAAAYRpQ0NQSUNDIHByb2ZpbGUAACiRfZE9SMNAHMVf02pFKg52EHHIUHWxIH7hqFUoQoVQK7TqYHLpFzRpSFJcHAXXgoMfi1UHF2ddHVwFQfADxM3NSdFFSvxfWmgR48FxP97de9y9A4RaiWlWYAzQdNtMxmNiOrMqBl8RQCdCmMKIzCxjTpIS8Bxf9/Dx9S7Ks7zP/Tl61KzFAJ9IPMsM0ybeIJ7etA3O+8RhVpBV4nPiUZMuSPzIdaXBb5zzLgs8M2ymkvPEYWIx38ZKG7OCqRFPEkdUTad8Id1glfMWZ61UYc178heGsvrKMtdpDiKORSxBgggFFRRRgo0orTopFpK0H/PwD7h+iVwKuYpg5FhAGRpk1w/+B7+7tXIT442kUAzoeHGcjyEguAvUq47zfew49RPA/wxc6S1/uQbMfJJebWmRI6B3G7i4bmnKHnC5A/Q/GbIpu5KfppDLAe9n9E0ZoO8W6F5r9Nbcx+kDkKKuEjfAwSEwnKfsdY93d7X39u+ZZn8/iS5ysNxMqHoAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQflBAYMNg49CJybAAAgAElEQVR42u1dd1gUV9c/M1vovVcpEjoICArYhZhELNFYYkQTSTQaJUEUTExEMSqJDU3ArsESjVixxBZUQH01vIiKgqIxtqCoIGpAyu7v+4Odyc7u0oyp33ue5z6PsjNz+7mn/M65RE2Qq4lkC7VAG9atWwdNlJubC41voBVUUVGh9jJ+/fVXAMDDhw+bfHHMmDEgoguCytLS0vgHFi1ahJiYGDg6OmLXrl3834loIcO9QUTEMAwBoOrqatLT06OGhgYaMWIEnTlzhpzbOZKTiyuVFhU2qPWpvr4eRITExEQAgKurKyoqKuDl5QUimsd3aPigQVzVys3gCwCMHTsWRDSDeydT+YWDBw/y/7axsQERQUtLCwxRuerovQEA169fh4+PD+Lj4wEAlZWVcHBwgIhl0a5dO83zFRYWBnt7exAR7t69CyLCnTt3IJfLoa2tDSJ62tTqqASAQ4cOYePGjU3X0AS16WGOPFr8alNkrM3OaPKNTp06NbtgbYy0fxK8dO7cOf7HhoaGJl/k+6n8R26lKz8UEBCAadOm4eHDh2AYpvGlgIAAAICnpycAYNmyZfxLycnJguWUlZXV+NLRo0dhamwIALh//z4AQC6Xo66uDkSE6dOnY9euXVCdAo1tDwgIABHhq6++QlVVFSRiMTS+UVlZiUuXLvH/NzAwABFpXhVGRkYCRrJgwQIAgEwm4/sz/t3RDZqma9fBgwehr68PhmEgl8vh4eGBa9euISUlBSbGxk0vq2nTpvH7qXfv3mjLGgQRWTzPgiV7I+l+IkJGRobaCGdlZUFENLTNHy0rK0NdXR2el65evQp7Y609LVbEMozay3Fxcc9dcW1tLQx1pL+qVELXuAf+85//gGXVKw0LC2v2wzExMSAiuLq64s033xRuPtUFu23bNqiueNVKp06dCgMDAzx79gzXr19HfX09QkNDUV1dDQAYOnQoiAhSqRREBGNjI+HOUK1AX19f7TxgWYZf8BwT9vfz4U5X2NraYurUqUhPT8fkyZNhYmwkJ6JK5U45cx+7cuUKkpKSBJWOHTtWsJ9lMhkAwMzMDPn5+fD39wcRwdraGgAwYsQIjXviMDd5IpblPyiTySAWiQQVTJ06FQAwbdo0AEBRURFmz56NoqIiEBE6derE9fhEk5utvr6e/2hUVBSUFwcRcecSXF1dBa1fvHgxKioqcPDgQaSkpCAyMhJ9+vQBES1v1cEhl8sBAKtXr0avXr1QWlqK8+fPg4jg5ubGz9W7774LIoKVlRW/sa30JGfauo8Fc7Vhw4bGBeDvDwBISUnBw4cPce/ePYgb+S6IaCb9DpJwPaitrVU+PvLpDyJvQ23Jry/yg10YIoSHh/NzpfG4bes8dOrUqdlzvNmzvTn+SUSkK2V/AUDm5uYkEonaukIIAKQSMdq0mq5du/bcXNqkkZcxmirRVZVeVq5cid9Dik1swNcgZpkKHW1tuaZjwMLCos0V3Lx5U3mpE0tEogY5TKprahiZTE5ubm5UXV3NN6C8vFG+zs7ObnKsb9++TQzDkKGhITEMQw0NDVRaWkpExE8wPv30U7z11lvCc0bDiXrq1CkAwK1bt0BE8PX1BRFh37596NGjBx48eNDkyuP/qKOjg9cHDuT/v3nzZjVJMzY2FgsXLgSn1aWnp2Pu3LkAgIsXL4KI0LFjRxAR9LQlsDTQ/oWkYjqj/JHu3bsjKSkJ4WGhGk/Pbt26AQDmz5+PCxcugIjg4uLCz4FYLIafnx+vtxGRORERUlJScPr0aUGLU1JSGivrHAwAmDdvHn799VcQEUQiEf/R/fv3w9LSEn5+fsjOzsb9+/eRnp6uXHEgeZmZ3eU+rCyDKh/LH3/8MYI7+AIAZs6cCQA4c+YMDAwMMHv2bHzyySdITEyEcaOoCZZh5ESk2+RmVN2YZ878NpozZsyAr0d7/rnHjx9j2LBhEIlYfgEofjNVq0AikaBPnz78x7SlYjx79kxQWWhoaGMrWZaXVIgIAwYM4BloQkICLl26pM7PEhISAAAdO3YUsBMfHx9ERkby/584cSKvsJ49exYA8O6776K2thavvfZao+L6W+UBgkocHR35D1VVVQlaP2vWLH74lPcRd1Jy+0RLS0t5h+tq2rB+UqmU/0DSjBmCit577z1IRQykUik8PDz4j23btg379u3D119/rayvt8j+f+OkBgb8wxUVFZg5cyaWLFnC/84J8WlpaY0SjaMjX7lihZk1x/Jnu7i48BWEhoZi7ty5mKHonUKYg1QiAREhKCgIRITAwEDk5+ejvr4eVVVVaJO0YmJsjLCwML6VH374IQDg7bff5nc6t/urqqpw4sQJ5flpFV0cNmyY2ub08PBAZWUlrly5wivAjo6OsLS0fO5zXzBXISEhSE1N5ZVlhRoOIlrX3AeYVlbUkJqaKrp06RJJJBIqKCigU6dOERFJiaj+RYpIlopW36a/kIJcTaVbxCK2gRTy2tatW/mhzsjI4IY29K9sZD8LfUkut5LDw8ORkZHB60jPS4cPH248QMU05Y9quJGJkYH86NGjAlXpz6DCwkKwLAMbA8nKF9UZtUq++eYbpKSk4M+mO3fuQE9XB84mWgXP1RMTHcmNsrKyJit4+PAhnJyc8FfQ06dPYWNtDTN96QMF12llp3Sl8tjYSS1WEBISgvz8/L+kczKZDE5OTpCK2doWl1lpaSmGDx+ODl4vYezY91r8eEZGBoYMGfJCG1xWVsZLE5yA5uTkBCKCn58ftETMz5pOmtpx48ahOTt3Xl4eDHW1WtWxp0+fwt7evkWOp9pYa2trvrGRkZE4ffo0bt26hcmTJ2P48OGCVdAqMQkAHBwcQEQYOnRokw2xMDXGhx/GtmqEOaGjc+fOvIxgb2+PjIwMrF69GoMGDcKmTZv450tKSjB+/HiMHTsWN2/e5P9+8eJF3tgnkUhgZ2cH9jfRYEqznoeamhowDIPo6GgQESJ699L4nJGBfpMdIyIwSlrj6dOnMXjwYIwePVqgTKg2lltKpqamv+leIhYiplFi9vb2xrx58yCXy2GqK/2FnxZDiaTK0swEIpFIo5UFAHJyckBEuHfvHqZOnQoiQu+e3QXPyOVy6OnqCJYiEcHd3R1ffPEF9u/fj2HDhvGNMzU15dxofIno3QtffPEFb/ILDQ1Fly5dsH//fsycORNyuRyzZ89GYWEhoqKiYKCvDzFDP2pcZnfu3AER4e23325y2UyZMgVeXl78/xMSEhorDg4SSO0SsRhGRkaCxlqYm2HVqlUAgIKCAs75ARcXF5ibm2PdunWYNGkStm7divz8fEyePBkZGRkwNDSEvZ2d8rc+adaCp3rqJyoa+csvvzTZsfDwcLXlMn36dBAROvh4NmlPMzMzQ0NDAz755BM0NDTgq6++wuHDh9GhQwcEBgbyjebEZSsrKzBE99tybj42MzPT2GixiIWbm1uzG32gktFD2ebTuXPnRsOtkz0aGhpARBg5ciQcHR1h9ZvSAGtra1y9ehUAcODAAcyfP59Xd/V0dFqlWLwuFosELmJHa2ssX75cs3nNxESg3avSyy+/zO8TrpG2trZYunQpb6QcPnw4goKCUFFRwb9XXl6Ojz/+GElJSXj8+DG2bNnCc1UjIyOEKgZEUaKb6kzx4sWL1Rq1atUqEJFGK2l1dTV69eqF3j27Q1nN5pbQwIEDUVdXhxMnTqi9u2HDBshkMtTU1CAhIYFfRu7u7rAT7gkQEQxEogdENKq1S8uZiDBlypQmUQwWTSy9O3fu4Mcff0R9fT1YlsHYsWPh5+eHadOm4fPPP0dhYSEiIyP5hnXq1ElgYuH2wuzZs/nlpTownIbOMPSQiIxavWFEDN0mIgH2gaMuwcFQhW2sWrUK1tbWvL/HxcUF/fv3VxvdkJAQfPTRR0hOTsZ//vMfwTeqqqqwc+dO1NbWYs+ePQgPD+ff6+jjI2AEPs62j55HgGZYhqqJCLt371YbLU5M6dSpE4qLizXOWklJCRYuXIglS5YgOzsbFRUVmDZtGi8NaGtrw05p8xMR76uWSqVwcHDAhx9+iBMnTkDhMB73InQcfa6ywsJCAMDdu3dhqXQyA8DevXvRpUsXEBEcHR0FLieuDBs2DIWFhbh8+TJsbW1BRDA0NISenh5mzJiBrKwsteV269YtyGQy3qxIRPYvSnlz4Rp2584dfKKQBIgIJiYm+OKLL1BbWysQT548ecJbbr29vUFEPACAcy8XFBQAAJYuXYojR45g8uTJgucVpYSIjP8oFTuCW8tPnjzRuHkjIyMxZMgQ3iP89ddf8yO/adMmZGdnY8WKFWqsXOHAdf+rjB4fcSZTjpUTEV555RW+c48fP8bx48chlUrh7u6ubAhrIKKX6W9Ka7kR9vT0hJOTE/T19ZVHfSz9Q2kM/UtIrC2id9pbGlyx0hNn/VMara8toneczPR+JiIYGxogNjaWl7Rra2vR3rmd3NrwOU1GfxCZaLE02dxAu4yIYGjQ2OiioqJWWVIC/HzllvpaN9pg3H4hZCtlabauVPyEiKCvp9fqRrdEoZ1CYKIneUhEWn9Ewxkxy9Rx4sUHH3yA8+fP/6H2rj4vvwwDbclTgeP8d+9Olnn68OFDbNy48U834A0ZMgRaEnEdEVn//o4oKWOff/4575T8MykmJgYilpX9npPev2/fvmoWFWdnZ4FM9WdRXFwcGOb5fDYO4eHhGj+an5+P/v37/yU246SkJAWMgAa0fqdrgG8o0/vvv4/MzMy/pEOLFi0CEUFX0gpRx8pAq6glq75MJoO1tTUePXr0l3Ro9erVICJY6oqTW+rPEJZh1PAuqvTjjz8iNDQUfxVt3bqVE0aHqE0IJ6leu3YNHbxeQmt8LuPHj0d6evqf0vj169fziEsigrZE/IyIegt64WSqfSI1NZV/acSIEdi8eXOTipQqd7OyshJY31/UqCvbla2srKCvr6+sTapZXuY7WRprbEhUVBTsrcxbNTsFBQUCW/LvHXF3d3doa2vDysqKtzPL5XIsWbIERPSLaicsiAgTx48T6Neq1KlTp1bNDofGUp7d1o64l5cXRCIRdHV1MW/ePDQ0NCAzMxP9+vXDokWLeE301KlT0BXTadWObOncuXMjyE1bGyKWFYQaqPlS9HR4VEpLFBkZKTB8K4+4vr4+D5lhWRbx8fG4fv064uLi0Lt3b2RlZQmWrqqtTEvMgmnU9dtz8lVtXl4e/1BRURFYlgHLMk0KjDt37kRrOBvn+uNMRyEhIfzojx49GtnZ2RgzZgwmTpyIn3/+mW90RkYGhg8frhaekJaWBisrK372BGYoHQn7SJNMZWBgAG1tbTAM06TMZWZi1KILj3O19e3bF2fPnkVBQQG2bNki2FejR49GVFQUcnJymmy4nZ2dWuMt9SWcZ8COiChu8ODBGhsxadIk2NrawsjIEESkhkwEgHXr1oFlNc/O2rVrMXToUPz3v//lvQKLFi1CREQE0tLS1OI30tPT+Ybr6enxoTdccTA34EFvvr6+KCoqwvwvUoQxPLdv39bYGQ5ZeuTIERgaNnYoOztbjf3q6+mqzU63bt3w6quvqh2k06ZNQ25urqDhLMsiMDBQ2WQEZztr3lHk6uoKc3NzfPfdd5g3bx7q6+vR0NAAbTH7QDXeBp9//nmTS8TBwQG9evVCeXk59PT0QEQ4fvy44JkVK1YIONvAgQMxZMgQbNy4EZmZmYKGcyOrBLSHro42Zs+ejUGDBvHeY2uFXycpKQn5+fk4efIk5s+fj82bN0NXV5d715mIyMvV1RVyuRwiloUyzlETwEAsFgNoDNniZkiZwzQ0NEBLKsVHH32IkydPIioqim+ojY2NoOEMwyA+Ph6PHz9GbGwsj5H09PTE5MmTsWbNGnz99dd4+PAh4uPjceTIEdja2gos+kS0gtfLO3bs+NtyCG+ElHJmT1Wqra0FwzC8hb68vJw3xH3//fcC8Vs5/oUrw4cPx08//QQAvGeZg2dFRETgwIEDGDFiBOrq6pCUlITMzExERETwrg1FKeU2eLOgA0XUHHbu3Nnk7PTr108Q83T//n3eZbBnzx4AwLNnz9C1a1fk5uYK3uVmMjg4GJ6enjhw4ADCw8NRUlKCFStWYMWKFXj33Xfh5uambJ0HEf1MRJFNG6VEoryXX35ZUBkXmsoBsDXRtWvXYG9vr4ZK4hq6Y8cOjWK4lZUVDh48iL179+LQoUM4e/Ysli5digULFsDc3Bzm5mYCgLdSR0xa1EW0RaLHmpylbi5OEIvFTYIQAMDDw0ONlVZUVPC++e+++04wkzExMaiursaVK1ewe/du6Ovr8zhi5QNTWedpC7y0IxFp9PclJiaCiJo1Df3www/86ax6lnCjunHjRh4urKenJwDjkiK+k9uHqamp2LRpEy9fiRj10GFVSuA+tG/fPmgCG3ANIiKMGzeu2ZP866+/VkVno127dqr+EL64uLggOTmZdwBxtHfvXowaNQrffPMNjh07BnND7SoiqiYi7SbRRaWlpbyRoaysrEnY1MyZM2FvYwVTU9NmRZKwsDBlHo9hw4bxYk5JSQnc3NzUbGc7duzARx99hIMHD+L+/ftcBDvPFCxNTWTKwSktcqxZs2Zh1qxZMG/CbT1y5EjeslFeXi74bc+ePXzlXGhwTU0NPvvsMyxcuJDfZ3K5HMuWLcPbb7/Nc7TFixfzB629vb3qnmkgoukt2Ys1anz62tp47bXXNHama9euuH37NogIS5cu5f+uUHgQEhKCwsJCNXvYuXPncPHiRQDAkSNHeFlKLBbz8S3KhWVZENHeViNWmwq+be/ggBUrVmj8LTAwsBHEZmbCa4WnT5/mJVVNqLtRo0YJsFzKy4+DdXAnflhYGAdMi2udLYuojmEY1NTUaEbQSST8SaxKPj4+fCSFajyhXC7Hl19+yWO2bG1t4efnpzbivXr1wp49e9QgJTExMfjyyy+V43s+a7EzLENFzQmNTWFXOBiI6pKYNWsWRCIRH0GjXMaMGYOqqir8/PPPSE1NRWpqKo4cOQIAuHfvHlJSUvDBBx8gNjYWAQEBuHz5MoqLi9HSRlemnkQEXV1dtcPv2bNnGjkZF7vVoUMHsCyLV199FXo62oKGGxoaol+/fpg5cybWrFmDx48fq7H1wsJCVFRUIDExkWfdpqam8FNCTShkrbBWm01ZhqkgIrW9UVxcDAsltrts2TL06dMHT58+RVVVFVasWIGPP/4YiYmJGDFiBO7cuaPWcW6jA8D58+d5UA3XYXtzc8EgMAwDT0/PRrnLyvDa81jmx3J2JNXR66ew2AcHBzd53tTW1mLXrl1YuHAh0tLSUFlZqQaocbC3h1gpvk0ZYefl5QVTU1NcuHABCxYs+F3RL0REEqaRfwuk1zcHD8aqVav4jhw8eBBvvPEGBg4ciMzMTMhkMshkMqSlpQlAZsqRfpweP2nSJF4P19bWhrW1NWJjY5GVlYX9+/erylke9DtpJafNceRkY4OVK1di1KhR2L59uwAVxLIs/Pz8eG6ljLj76quvIJPJOCQQj0Gxt7fH+fPnNVr66+vr0b59e+75Qy8qmocXZ7hlERERocZWuUCpbdu2CaC6nAJmaWkJsViMOXPm8L8vXLiQt6KsXr0a+/bt4/HKPkq4rhflPM1TxpsoNzwqKkoAEZTJZJDL5TxQTSQSwc3NDR4eHrxok5+fz+ccuHfvHmbOnInLly/DxMQEEokEZmZmynV8+KI9v4Hcx5tLW6QS0ceHEwLAF198gcuXL/PS8okTJzBnzhwex6LU+DtEZPtH++BvNSXWc+BpR0dHfPbZZzzMlgtnrK6uxoIFC/DkyRP4+/uDZVlYW1srd2Dxn42CGMEtG2UBMS4ujlekkpOTcevWLX6f/PDDD9i+fTsYhhEEghJRDRGF/JWQDkbRCD40itukixYtEswUh6lXQcvtJEU+gr8LzSQi6OjoYPfu3byYcfHiRRgaGsLT0xMSReCqooyivzEZKnOy4OBgHn6uKIUKEOg/hnarnCsz/8nAM0cicqL/0W8mNyIKlrA0vp2xdIe9ie4tiSJUl4hga20p79+/P+Lj42FrZSFjGEZub6z1AxH5/2/ono83dJGwFGdvKN1vbqBdxjQmjWgUmg30ER4ejtjYWGRkZLQJ7yaTybB161a4t3eRExFsDKSXiajf/+fBtiWifmKWki30JbnGutIHynzMQF99sJuzLr8IksvlyMrKQnBQow/M0kD7F20RvUNE4n/yQIuIyJuIRumJaZGdoeQ/OlLRr6qqn5eXF6Kjo7FixQoUFRW1OcnSn0m5ubmI6tuYr8RYT/rIQExTqYl0In83GkdEcG/vKn///fexatUqnD179nelCPy70pkzZ9C/fz8wDANdLXGNuQ47nzSkx/mrKVFZUudc5oMHDxY4df+tdOnSJYwcORJikQgSsajB3lD6LRG1+ysnxIazZzRFV65cQWRkJMaMGdNsIO2/hW7cuIEJEyZAW0sKhmHkDsZaR/9sCc+LVGKPmqPKykrExsbCw8MDe/fuxf8Hun//PpKSkmCsQCFZG2qV/NESnljEMrLm8CrNSToZGRmws7NDbGxsqyCF/wZ68uQJUlNTYaMwd1kaaJe9cAlPzDYaTFRTvLaVfvzxR4SEhKB3794C18m/nWpqapCWlgZHx0ZnhYmetMpYi40nIp3fOzesgZSdJhGL6p0dHWSqMLS20sOHDzFu3DjY2Nhg3bp1f7h+8nei+vp6bNiwgbd862lJau0NJUuohTx4quRHRDlEdIqIbhIRLE2NIBGL4OrkqAYZbSvJZDKsWrUKlpaWGDdunFp6zn8b3bx5E+vXr8eYMWMEcHRF2dOaCUkgRaaNnJwcHDhwACUlJcjMzMTSpUtx584dpMyZDalEDGdHezVk6vNQQUEBwsLC0KFDBzVU3j+BysrKsHXrVowdO1YdgK2E/nBwcPgNBUJUQK2NN3OzMblJRM0GxxUUFCAqKgq9evXCm0MGQ8SycHZ0eCETxElzhoaGSEpK+kti2to66GKxGHZ2dnB1deWhOM7OzoiJicGmTZtQVlaGmpoaWFtZcPa9V1szF3N4rLRFI66U8wi2hnJyctC9e3eYmxqDYRi0d273u1kcJ82tW7cOtra2iI6OVkOTvSi6desW1q9fj5iYGE3sBRYWFvDx8YGrqyvvETI2NsaAAQOwZMkS3mDa0NCAoqIibNiwAUlJSfjyyy+xfPlynDp1CocOHWqcQIZyWm1OISKcO3cOBw4caPQ/syyio6NRUlLS5k7m5OTAzdUZDBGcXhCL4wYvOjoaXbt2bZPluLmVLhaL0b59ewQFBcHFxYVDx0EkEiEoKAiJiYk4fPgwnjx5gvz8fKSmpiI6OhoRERGIjo5Gamoq8vPzW0wrd+XKFUW8IltLRDFN2doYhfh7u0FOdgsXLqTJkyfzPz58+JCmTp1K6zO+IZkcxLIMvfZaX0pOTqaAgIBWSwyPHj2iMaNH0c6sPeTazpHWbdhIXbt2fSGi+/Hjx0kqlZKjoyMdPXqUjh07RseOHaNr134DH5mbm1O7du2IZVm6c+cO/fLLb+Fc7u7u1KtXL+rVqxe5ubnRxYsXKS8vj65evUomJiYUGhpKoaGhFBgYSBKJhH+vpqaGCgsLKT8/n6qqqsjY2JgcHR2pe/fuZGSknm3o0qVLdOzYMUpMTKSnT5+StYk+VT39lWrqQYrF8YMCXrOTUViAG4iISktLqX379ho739DQQLGxsbRs2TKSiMVU39BALMvQ6wNfp89mzCB//9ZZHB48eEATxo2lzB07ydXJkdat/30T9PTpU/L396eysjLq168fHTlyhCoqKgQT0rNnT+rVqxe5u7vTrVu36MKFC/TkyROys7Oj8PBwCgkJIX3939y6lZWVdPr0aTp9+jQVFBSQTCYjT09P6tKlC4WFhZGFhUWTg378+HE6fvw43bt3r3HVMwy5uLiQmZkZVVZW0k8//UQymayp7pQQ0cdERKQvYXKJCE1d3aVKJSUlfPCEr68vDA0NBOn3VJPGNcdS+inM589zBlVWVkJXVxempqaIiopC3759W0xve/PmTWRmZiI+Ph4RERHo2bMnJk2ahPXr16OkpKRJ3enixYtIS0vD0KFDBSFApEh4FxgYCD8/Px7xrFq0JGJY6IkhYhpB+CEhIfD29kb37t0xceJEEJGcVMJK7UQsI5NKpW2+mmH37t0wMzMDwzRmIZs+fTofr8FNEneFQEuD9XJEb36CWiMWv/POOyAijBo1CjY2NjwCdfPmzZg1axbi4+OxfPlynDx5kkeTNjQ0oLCwENu3b4dyNtyLFy8iPT1d46BLJBJ4enoiKCiIv+xMtTAMA1c7SzjY2fJYSJFIBC8vL/j4+MDBwQFTpkzBzp07sXbtWmRmZqK8vBw3b96Evo5Wg5Sl2Wr7xkIiydMSi3h0HIfjbS01NDTwWGGJRILk5GSUlZUhISFBsHoie/dqccB/+ukndO/WtcUJ4qAlr7zyCnr27MnDr44ePYo5c+bgnXfewXvvvYc1a9bg8OHDTQ66Mjjb2dmZP+hVi6WZMQa/PhBjxoxBjx49BLic9u3bIzg4GGZmZhgwYAA2btyITZs2Yfr06UhNTcUvv/yCuro67Nu3D9u2bUNxcTFmz54NEcvKWZZSSenCDI70GUU2tsYV20uAEFTOeNhac8rgwYN5mP3JkycBNMalTZ06VTBJPbp2wdGjR5tllZ07NUbWurk4CSaIu5Bt5MiRkEgkWLp0KYYNG6Zx0PX09ODm5gYnJyfBLRaCHSEWo2uXcMycORPZ2dnYuXMnRo4cyYeekSLHWqdOneDk5AQvLy/MmTMHOTk5+PLLLzFt2jTs2rULtbW1KC0txZw5cxAfH49t27Zh//79GD16NIyMjODj44PAwEBoaUlV2yBIX+5OivSrynT06FHYWJrzEdsZ5wwAAAzwSURBVIatCQ7XNKhcfOjrr78uiLy6d+8epkyZIpikLp1DcOjQIY3funDhAgIDOvATdPz4cVhZWcHKygo2NjawtbWFvb29KrJMGIPk7IT33nsPW7ZsQXl5OeRyOU6cOIFJkyYJAI0sy8LX1xehoaEwNTXFkCFDkJmZiR07diAhIQHTpk1DQUEBnj17hqysLHz66af8ZKampiIgIACWlpYICAiAuZmpajsaiGg/Eb3RHO6W1RaL683MzDQedPX19UhMTOR5pb+/Pw8ibgsdOnQINjY2MDAwEGTx56i8vByJiYmCdGudAv015jc9f/48AvzVQcu6ujqIiIhASkoK8vLycOTIER4rcOvWLcyYMUMtaMzKygrc9ZVBQUFITU3F/v37ERsbi9deew2pqam4f/8+bty4gcWLFyMuLg4bNmzA9u3bER0dDX19fbi7u2tUOlXsW21Lg2XKsh9y+N3mcqdcv34dwYEd+MMtISGhzQn95XI50tLSoKOjg549e/JxXar04MEDfPLJJwL2EeTnjd27d7fJwvzrr7/yeY39/f3h6+sLW1tbxMXFITs7G8uXL8fAgQPxwQcfIDc3l88W+vnnn2Pp0qX4/vvvMW3aNDg6OsLBwQH+/v7QUYHek4L929vbw9HBAUyjNPX1C8FiGYhE14kIH330UYud3blzJwz1dJ9bOOB2YUpKCgwMDPDNN9+0eFZ99tlngsTSfp4vYdu2bc1q06NHj+bZZ1BQkJpYvXXrVqxatQoHDx7E2rVr0bt3bxgYGCAoKIhP5N6UxOXl5YWJEydi8+bNuH37Nr799lvu9w9etOexm4hhGiQSCY4dO9biwFZXV+O1V1/hGzto0CC1G4Rau6InTpyIPn36tCrTUWVlZaNLVoHmJyJ4v+SKzZs3CyaJy5jv4OCA/v37Iy4uDidOnMCECRNgbm4ODw8PhISEQE8lpo+UYmE/++wzNYHnxo0byMjIwNixYzFo0CBERkZCKpVCImKevBBHIxEtIaL5RDSBiC4REVil4JLKyspWDezKlSuhIxEp+LuuxitQW0PV1dVYu3atIE7x2bNnOHnyJBYtWoQ33niDvz2zudLe0RapqamCSB9N0hknzAwZMgSpqanIyMhAdnY2f7mWXC7HmTNn1ILRnjx5gu+//x4ff/wxL3EyjWl59lFjptznIj0iqiBFuOsPP/yAxYsX83FT1dXV6KwIb23Lzazp6enQ0dHhLhZEx44dcf369TZPTl5enka9QU9PD56envD399eYx9vQ0BCRkZGIiIgQKLOkSKXdqVMnhIeHY/LkyThy5EiTQaoVFRXIyspCQkICxo0bh/j4eGzfvh13795FcXExlixZgqioKIFwoiH6vJS4LD2tjMRII6IJ3bp1o+PHjwt+vHz5Mn366af06quvUnBwMHUNDaXq2lo6eOgQ9ezZs1UVxMfH044dO8jN1YUO/5BNLMvS9OnTKSkpqcUbJO/evUt2dnYkl8vJ19eXRCIRFRYWEsMw5OHhQV26dOGLi4uLwJB69OhRKioqIiIiBwcHioiIoHbt1GFbN27coJycHCooKCC5XE5WVlbUvXt3CgkJIblcTidPnqTDhw/ToUOH6OzZsySXyxtZi1hML730EhkbG1P53bt07fp1AtSCF38hou8V4u9eIqpr7cRcJJVAcU1UXFyMbt26wVMR3+Pt7d3qc6Ourg5RUVEICQnBgQMHYGtlwUfEa8pur7zbSCl62MjIiJf0rl69itWrV2PhwoVYsGABcnJy1O7x48TgNWvWYMKECXjnnXeQnJzMS1icrrRp0ya8/fbbajvOwMAAAQEBCAwMFJxbTZQz9CLScCoon4gwadKkVrOU27dvw1HBlydPntzq9x49eoSgoCCMGjUK9fX1mDFjBp9h5s0331SDIyll48Mbb7yBkJCQ5zqfzp8/j4ULF6JPnz5qAfo2NjYIDAxUJHgRNSllGRoawtXVFZ07d0ZoaCi8vLwgFYvlirPjhVM8V7lyJGhr6KeffoKliQkkYnGzphJNSqK3tzfWr1/Pr+bwziGKTGt6fH6v+/fv8wrrhx9+CIZhNEpl1dXVOHjwIKZMmQJ/f39BximRSISXXnoJQUFBfI78lopYLIaLiwuioqKQmJiIFStWIDc3l180a9asARFBR+msYxm6r4D6vrAsvO+zTGMqYQ6uqpoKpTnauHFj4/UL3t5qsf3N0d27dzF69Gg+4raoqAiJiYnQ09Hib93hEkm9/vrr/KCqshKOzXTs2JG/5URTYVkWHh4eGD9+PJQz4nHomqtXr2LXrl3YsmUL9u7dqzHHx9OnTzFkyBAQEZ8Cs7i4GG+99ZZgp7EMVRFR8vNMkqrar0VEcxiiyVD81rlzZ1q/fj25ubk1+yEAFD18OG3aupWmTJlC8+fPbxkyk5AgeI5lWfL19SVdXV2qq6uja1ev0qOqKv73sLAwevbsGRUXF1NNTY3mmA2RiIKDg6lv377UsWNHEovFdOnSJf76Y5ZlycnJiXx9fcnNzY3EYjHJZDIqLi6mgoICKi4upurqaoLiOms/Pz9yd3enBw8eUF5eHuXl5dHJkyfp0aNH1CUkhPLOnCEtLS3q378/1dTU0IEDB6ihoYFrToVCxfjuRUZarVBeaREREXyAb3MYW1cHB0glkiZN7pWVlTAxMYGpqSnatWvHx5U7OTlh3759auJpYWEhXnIVatampqYIDg5GTEwMMjMzUVxc/NwhGjdu3MDGjRsxfvx4+Pj4qIngxsbG8HZzg0+7djARXoMg8Ln4+vrCxsYGLMvCyki7lP7gGGErhUgnOHibslkBQHZ2NiQiEXy9vNRY2qhRo2BpaQlDQ0N8++23/MDs27cP//3vf9sMzKurq0NhYSHWrl2LpUuXYuXKldiyZQtu3LiBmpoa5ObmYu7cuejbt69GKcrCwgKONjYwbEKjVy3m5uYICAiAgYEBQkNDsXbtWlRVVeGNgf1kTub6d/6K4CMPIvpRuZHR0dFNniUfK3KacRkYAMDFxQU9evQAEWlM01pZWYmcnBykp6fj/fffx4ABAzB8+HBMmDAB6enpOHXqFJ9Ps7lVzjAMLCws0K5dOxgrGTU1Heze3t7o2LGjmqJpZ2cHHx8fSKVS9OjRA5s2bcLly5exZs0arFy5ks/dWVJS0nj4S158Bom2UihDdFVZ0klISFDTF6qrq9GpQwdoSSTIy8tDTEwMbGxs4OzsDAsLC6SlpSE3N1dN7+FW+bx589RWuZaWFlxcXODh4QELlZw6qsXY2Bh9+/bFvHnzkJOTg127dmHQoEFqF2S1a9cO7du3h0gkwiuvvIJt27YhLy+PT9HZkl5maWkJYx3JE2rMBTeJ/uQbKzRRP4bonrIZe+7cuYK4x6KiIhjp6cHH3R0eHh6wtrZGeHg4JBKJYJVbWFjA398fgYGBrbJvubu7IyYmBt98840gA+Hjx4+xZs0a1fSeYFkWL730Euzt7SEWizFgwADs3bsX9fX1KCkpQV5eHmQyGS5evIjMzEy15LKlpaVYs2YNtmzZggsXLiAlJQXOzs588mSV9l36u4TmxTBET5TtVOnp6bwPZLXinrvWFIlEwgPisrKycO7cOcTFxandynb79m3MnTtX7T4vHR0deHt7w9TUFFKpFEOHDsXhw4cFVuTHjx9j7dq1iIuLw7JlywS6UG5uLpKTk7F48WKUlpZi9erVgisZ7ezs4O7ursk+9ysRrVYE8P7tooo/YRpvROelps2bNwNovJ5xwoQJmDhxIpYvX47z58+3iDKUyWTo3bs377BSzhPr5ubWaILX04OOjg5GjRqlBlt69uwZNmzYgKlTp2L9+vV83luZTIYDBw5gxowZSEtLw71797Br1y68/PLLvDJqbW0NDw8PTZp/PRFto8b0+Qz9g0iHiFIV+CYeQaKcxas1xCVhNDExQXBwMMLCwmBsbIwePXqo4c3q6uqwY8cOpKSkYOvWrQJF8MyZM0hJScGyZcvw8OFD5OXlYcSIEXziOnNzc3h6eqqmpOXwWUeIaPA/PQ5flUyIaLNyZ11dXZs1TnKWA+75bt26YdasWQIH2ebNm7FkyRLs3LlToLNcu3YN6enpWLlyJe7du4fi4mLExsbyHkxTU1N4e3urHfyKkt8c7vffSg4KHK0gs+e5c+fUJuXNN9/8DZrUowcGDx6M48ePC/z1dXV1OH36NPbv34/y8nKUlZUhOTmZFxiMjIx4HUPDBJQqbIGm9D8SRCX/V3mgOnfujCtXrgAAZigynhIR3nrrLYwePVowaY8fP0Z6ejqfOo9T7ppANd4lohT6X3aiNlEXIvpJeSCVk/q+//77jUZQxQTo6uoiLCxMLTOlolQR0VeKSf8fvSB6nYjKSUNiSg0T8IyINlBbssn+j343jaLfdCAZER2mxiupRP+WDv4fOF7wvCtwgZgAAAAASUVORK5CYII=
// @license     AGPL-3.0
// @run-at      document-end
// @noframes    true
// @exclude     *://www.jjwxc.net/onebook.php?novelid=*&chapterid=*
// @exclude     *://www.meegoq.com/book/*.html
// @exclude     *://www.viviyzw.com/book/*.html
// @exclude     *://www.yruan.com/article/*/*.html
// @grant       unsafeWindow
// @grant       GM_info
// @grant       GM_xmlhttpRequest
// @grant       GM_getTab
// @grant       GM_saveTab
// @grant       GM_getTabs
// @grant       GM.info
// @grant       GM.xmlHttpRequest
// @connect     img.shouda8.com
// @connect     qidian.com
// @connect     yuewen.com
// @connect     kuangxiangit.com
// @connect     sinaimg.cn
// @connect     jjwxc.net
// @connect     image.gebiqu.com
// @connect     qidian.qpic.cn
// @connect     static.zongheng.com
// @connect     book.zongheng.com
// @connect     cdn.static.17k.com
// @connect     www.shuhai.com
// @connect     img.uukanshu.com
// @connect     oss-accelerate.aliyuncs.com
// @connect     cdn.bcebos.com
// @connect     rs.sfacg.com
// @require     https://cdn.jsdelivr.net/npm/file-saver@2.0.5/dist/FileSaver.min.js#sha512-Qlv6VSKh1gDKGoJbnyA5RMXYcvnpIqhO++MhIM2fStMcGT9i2T//tSwYFlcyoRRDcDZ+TYHpH8azBBCyhpSeqw==
// @require     https://cdn.jsdelivr.net/npm/jszip@3.6.0/dist/jszip.min.js#sha512-uVSVjE7zYsGz4ag0HEzfugJ78oHCI1KhdkivjQro8ABL/PRiEO4ROwvrolYAcZnky0Fl/baWKYilQfWvESliRA==
// @require     https://cdn.jsdelivr.net/npm/crypto-js@4.0.0/crypto-js.min.js#sha512-s+p/j7+gSFJa1SUEwmPBAlitcUccgbaTTM3yRSmDHUp0UCcRdBMgI2toIT97ZKGKItfV3N66PEZbHcT/iS5thg==
// ==/UserScript==
