// 导入Waline
const Waline = require('@waline/vercel');

module.exports = Waline({
  forbiddenWords: [
    '习近平',
    '毛泽东',
    '快递',
    '空包',
    '代发',
    '单号',
    '购买',
    '傻逼',
    'SB',
    '你没🐎',
    '你没有妈',
    '你没马',
    '你没有🐎'
  ],
  disallowIPList: [
    '220.173.125.83',
    '222.83.150.92'
  ],
  secureDomains: [
    'slqwq.cn',
    'blog.slqwq.cn',
    '*.slqwq.cn',
    'kotodama.yunyoujun.cn',
    '*.hesiy.cn',
    'koto-api.pages.dev'
  ],
  mailSubject: 'Dear {{parent.nick}}，您在 {{site.name}} 上发表的信息,收到了来自 热心网友: {{self.nick}} 的回复,请速去查看',
  mailSubjectAdmin: '嘿,亲爱的管理员,你的网站📂{{site.name}} 收到了来自一封 {{self.nick}} 的信息,请速去查看',
  mailTemplate: '<head><base target="_blank"/><style id="scrollbar"type="text/css">::-webkit-scrollbar{width:0!important}pre{white-space:pre-wrap!important;word-wrap:break-word!important;*white-space:normal!important}pre{white-space:pre-wrap!important;word-wrap:break-word!important;*white-space:normal!important}#letter img{max-width:300px}</style><style id="from-wrapstyle"type="text/css">#form-wrap{overflow:hidden;height:447px;position:relative;top:0px;transition:all 1s ease-in-out.3s;z-index:0}</style><style id="from-wraphoverstyle"type="text/css">#form-wrap:hover{height:1300px;top:-200px}</style></head><body><div style="width: 530px;margin: 20px auto 0;height: 1000px;"><div id="form-wrap"><img src="https://cdn.jsdelivr.net/gh/Akilarlxh/Valine-Admin@v1.0/source/img/before.png"alt="before"style="position: absolute;bottom: 126px;left: 0px;background-repeat: no-repeat;width: 530px;height: 317px;z-index:-100"><div style="position: relative;overflow: visible;height: 1500px;width: 500px;margin: 0px auto;transition: all 1s ease-in-out .3s;padding-top:200px;"<form><div style="background: white;width: 95%;max-width: 800px;margin: auto auto;border-radius: 5px;border: 1px solid;overflow: hidden;-webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.18);"><img style="width:100%;overflow: hidden;"src="https://area.sinaapp.com/bingImg"/><div style="padding: 5px 20px;"><br><div><h3 style="text-decoration: none; color: #8fbc8f;">{{parent.nick}}，见信安：</h3></div><br><div id="letter"style="overflow:auto;height:300px;width:100%;display:block;word-break: break-all;word-wrap: break-word;"><p style="display: inline-block;">您在<a style="text-decoration: none;color: #8fbc8f"target="_blank"href="{{site.postUrl}} display: inline-block;">{{site.name}}</a>上发表的评论:</p><div style="border-bottom: #ddd 1px solid;border-left: #ddd 1px solid;padding-bottom: 20px;background-color: #eee;margin: 15px 0px;padding-left: 20px;padding-right: 20px;border-top: #ddd 1px solid;border-right: #ddd 1px solid;padding-top: 20px;font-family: "Arial", "Microsoft YaHei" , "黑体" , "宋体" , sans-serif;">{{parent.comment | safe}}</div><p>收到了来自{{self.nick}}的回复：</p><div style="border-bottom: #ddd 1px solid;border-left: #ddd 1px solid;padding-bottom: 20px;background-color: #eee;margin: 15px 0px;padding-left: 20px;padding-right: 20px;border-top: #ddd 1px solid;border-right: #ddd 1px solid;padding-top: 20px;font-family: "Arial", "Microsoft YaHei" , "黑体" , "宋体" , sans-serif;">{{self.comment | safe}}</div></div><br><div style="text-align: center;margin-top: 40px;"><img src="https://ae01.alicdn.com/kf/U0968ee80fd5c4f05a02bdda9709b041eE.png"alt="hr"style="width:100%; margin:5px auto 5px auto; display: block;"/><a style="text-transform: uppercase;text-decoration: none;font-size: 14px;border: 2px solid #ace0f9;color: #FFFFFF;padding: 10px;display: inline-block;margin: 10px auto 0;background-color: #8fbc8f;"target="_blank"href="{{site.postUrl}}">{{site.name}}｜请您签收~</a></div><p style="font-size: 12px;text-align: center;color: #999;">自动书记人偶竭诚为您服务！<br>©2020 - 2021 <a style="text-decoration:none; color:#8fbc8f"href="{{site.url}}">{{site.name}}</a></p></div></div></form></div><img src="https://cdn.jsdelivr.net/gh/Akilarlxh/Valine-Admin@v1.0/source/img/after.png"alt="after"style="      position: absolute;bottom: -2px;left: 0;background-repeat: no-repeat;width: 530px;height: 259px;z-index:100"></div></div></body>',
  mailTemplateAdmin: '<head><base target="_blank"/><style id="scrollbar"type="text/css">::-webkit-scrollbar{width:0!important}pre{white-space:pre-wrap!important;word-wrap:break-word!important;*white-space:normal!important}#letter img{max-width:300px}</style><style id="from-wrapstyle"type="text/css">#form-wrap{overflow:hidden;height:447px;position:relative;top:0px;transition:all 1s ease-in-out.3s;z-index:0}</style><style id="from-wraphoverstyle"type="text/css">#form-wrap:hover{height:1300px;top:-200px}</style></head><body><div style="width: 530px;margin: 20px auto 0;height: 1000px;"><div id="form-wrap"><img src="https://cdn.jsdelivr.net/gh/Akilarlxh/Valine-Admin@v1.0/source/img/before.png"alt="before"style="position: absolute;bottom: 126px;left: 0px;background-repeat: no-repeat;width: 530px;height: 317px;z-index:-100"><div style="position: relative;overflow: visible;height: 1500px;width: 500px;margin: 0px auto;transition: all 1s ease-in-out .3s;padding-top:200px;"><form><div style="background: white;width: 95%;max-width: 800px;margin: auto auto;border-radius: 5px;border: 1px solid;overflow: hidden;-webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.18);"><img style="width:100%;overflow: hidden;"src="https://area.sinaapp.com/bingImg"/><div style="padding: 5px 20px;"><br><div><h3 style="text-decoration: none; color: #8fbc8f;">来自{{self.nick}}的留言:</h3></div><br><br><div id="letter"style="overflow:auto;height:300px;width:100%;display:block;word-break: break-all;word-wrap: break-word;"><div style="border-bottom: #ddd 1px solid;border-left: #ddd 1px solid;padding-bottom: 20px;background-color: #eee;margin: 15px 0px;padding-left: 20px;padding-right: 20px;border-top: #ddd 1px solid;border-right: #ddd 1px solid;padding-top: 20px;font-family: "Arial", "Microsoft YaHei" , "黑体" , "宋体" , sans-serif;">{{self.comment | safe}}</div></div><div style="text-align: center;margin-top: 40px;"><img src="https://ae01.alicdn.com/kf/U0968ee80fd5c4f05a02bdda9709b041eE.png"alt="hr"style="width:100%; margin:5px auto 5px auto; display: block;"/><a style="text-transform: uppercase;text-decoration: none;font-size: 14px;border: 2px solid #ace0f9;color: #FFFFFF;padding: 10px;display: inline-block;margin: 10px auto 0;background-color: #8fbc8f;"target="_blank"href="{{site.postUrl}}">{{site.name}}｜请您过目~</a></div><p style="font-size: 12px;text-align: center;color: #999;">©2020 - 2021 <a style="text-decoration:none; color:#8fbc8f"href="{{site.url}}">{{site.name}}</a></p></div></div></form></div><img src="https://cdn.jsdelivr.net/gh/Akilarlxh/Valine-Admin@v1.0/source/img/after.png"alt="after"style="      position: absolute;bottom: -2px;left: 0;background-repeat: no-repeat;width: 530px;height: 259px;z-index:100"></div></div></body>'
});
