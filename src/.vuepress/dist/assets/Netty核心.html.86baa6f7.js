const e=JSON.parse('{"key":"v-4edd469a","path":"/codenotes/framework/netty/Netty%E6%A0%B8%E5%BF%83.html","title":"Netty核心","lang":"zh-CN","frontmatter":{"title":"Netty核心","icon":"write","category":["Netty","网络编程"],"tag":["服务器","客户端","组件","协议设计","粘包半包"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"一、概述 1、什么是Netty Netty 是一个异步的、基于事件驱动的网络应用框架，用于快速开发可维护、高性能的网络服务器和客户端。; 注意：Netty的异步还是基于多路复用的，并没有实现真正意义上的异步IO 2、Netty的优势 如果使用传统NIO，其工作量大，Bug 多 需要自己构建协议; 解决 TCP 传输问题，如粘包、半包; 因为bug的存在...","head":[["meta",{"property":"og:url","content":"https://gitee.com/oucystong/mynotes/codenotes/framework/netty/Netty%E6%A0%B8%E5%BF%83.html"}],["meta",{"property":"og:site_name","content":"小满の学习笔记"}],["meta",{"property":"og:title","content":"Netty核心"}],["meta",{"property":"og:description","content":"一、概述 1、什么是Netty Netty 是一个异步的、基于事件驱动的网络应用框架，用于快速开发可维护、高性能的网络服务器和客户端。; 注意：Netty的异步还是基于多路复用的，并没有实现真正意义上的异步IO 2、Netty的优势 如果使用传统NIO，其工作量大，Bug 多 需要自己构建协议; 解决 TCP 传输问题，如粘包、半包; 因为bug的存在..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-01T08:34:19.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"服务器"}],["meta",{"property":"article:tag","content":"客户端"}],["meta",{"property":"article:tag","content":"组件"}],["meta",{"property":"article:tag","content":"协议设计"}],["meta",{"property":"article:tag","content":"粘包半包"}],["meta",{"property":"article:modified_time","content":"2022-12-01T08:34:19.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"一、概述","slug":"一、概述","link":"#一、概述","children":[{"level":3,"title":"1、什么是Netty","slug":"_1、什么是netty","link":"#_1、什么是netty","children":[]},{"level":3,"title":"2、Netty的优势","slug":"_2、netty的优势","link":"#_2、netty的优势","children":[]},{"level":3,"title":"3、Netty的地位","slug":"_3、netty的地位","link":"#_3、netty的地位","children":[]},{"level":3,"title":"4、Netty的作者","slug":"_4、netty的作者","link":"#_4、netty的作者","children":[]}]},{"level":2,"title":"二、入门案例","slug":"二、入门案例","link":"#二、入门案例","children":[{"level":3,"title":"1、需求","slug":"_1、需求","link":"#_1、需求","children":[]},{"level":3,"title":"2、服务器端代码","slug":"_2、服务器端代码","link":"#_2、服务器端代码","children":[]},{"level":3,"title":"3、客户端代码","slug":"_3、客户端代码","link":"#_3、客户端代码","children":[]},{"level":3,"title":"4、运行流程","slug":"_4、运行流程","link":"#_4、运行流程","children":[]},{"level":3,"title":"5、组件解释","slug":"_5、组件解释","link":"#_5、组件解释","children":[]}]},{"level":2,"title":"三、组件","slug":"三、组件","link":"#三、组件","children":[{"level":3,"title":"1、EventLoop","slug":"_1、eventloop","link":"#_1、eventloop","children":[]},{"level":3,"title":"2、Channel","slug":"_2、channel","link":"#_2、channel","children":[]},{"level":3,"title":"3、Future&Promise","slug":"_3、future-promise","link":"#_3、future-promise","children":[]},{"level":3,"title":"4、Handler&Pipeline","slug":"_4、handler-pipeline","link":"#_4、handler-pipeline","children":[]},{"level":3,"title":"5、ByteBuf","slug":"_5、bytebuf","link":"#_5、bytebuf","children":[]}]},{"level":2,"title":"四、应用","slug":"四、应用","link":"#四、应用","children":[{"level":3,"title":"1、粘包与半包","slug":"_1、粘包与半包","link":"#_1、粘包与半包","children":[]},{"level":3,"title":"2、协议设计与解析","slug":"_2、协议设计与解析","link":"#_2、协议设计与解析","children":[]},{"level":3,"title":"3、在线聊天室","slug":"_3、在线聊天室","link":"#_3、在线聊天室","children":[]}]}],"git":{"createdTime":1669883659000,"updatedTime":1669883659000,"contributors":[{"name":"tongyusheng","email":"buaatys@163.com","commits":1}]},"readingTime":{"minutes":76.61,"words":22984},"filePathRelative":"codenotes/framework/netty/Netty核心.md","localizedDate":"2022年12月1日"}');export{e as data};
