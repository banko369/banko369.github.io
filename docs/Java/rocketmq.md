# Rocketmq

## config mq

conf/broker.conf

```yaml
autoCreateSubscriptionGroup=true
namesrvAddr = 192.168.2.8:9876
brokerIP1 = 192.168.2.8
listenPort=10911
aclEnable = true
```

conf/plain_acl.yml

```yaml
globalWhiteRemoteAddresses:
 - 192.168.2.*
```

## start mq

`nohup sh bin/mqnamesrv >/dev/null 2>&1 &`

`nohup sh bin/mqbroker -n localhost:9876 >/dev/null 2>&1 &`

## stop mq

`sh bin/mqshutdown broker`

`sh bin/mqshutdown namesrv`

## start console

`nohup java -jar rocketmq-console-ng-2.0.0.jar --server.port=8080 --rocketmq.config.namesrvAddr=localhost:9876 > /dev/null 2>&1 &`
