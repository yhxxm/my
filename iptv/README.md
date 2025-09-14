# 自用实验仓库
# 参考：
# fork来自mzky大佬仓库 https://github.com/mzky/checklist

播放源：https://raw.githubusercontent.com/mzky/checklist/master/itvlist.m3u
```
1、探测ts稳定性和响应时间（慢但准确，完成需要30多分钟，加线程数可以缩短时间，但易报错）
2、在频道下的播放源以响应时间排序
3、增加日志功能
4、使用“当前”全部可用的ip列表
5、全部使用异步多线程
6、去掉了经常导致异常的库eventlet
7、建议在TV同网络下执行，否则不准确
8、增加dockerfile 可自己部署在自己的服务器里面

如有侵权，请联系删除！
