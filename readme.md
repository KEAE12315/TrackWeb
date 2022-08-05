## enviroment

- node.js v16.15.1
- npm@8.13.2

## git repository

git clone git@github.com:KEAE12315/markingGPS.git

在项目目录下执行以下两条指令开启服务, 在浏览器里输入localhost:5000进入标注页面.
- npm install
- npm run serve

## dataset

https://www.microsoft.com/en-us/download/details.aspx?id=52367

代码压缩包里已经重置过result.json

## type of point(draft)

1. 驻足点，这是必须区分的点。
    - 物理含义：长时间逗留，就行了一定的活动。如商城购物，医院看病等。
    - 判断标准：5分钟以上，密集点。主要结合地点。
    - 注意事项：时间不是死标准，应该按照物理含义来。
    - 关键地点：小区，商城，

2. 移动点和慢速移动点。较难区分，这里统一说。
    - 移动点：移动状态，没有停留
    - 慢速移动点：移动状态，没有停留，速度较慢。
    - 做出区分的原因：坐车，坐地铁肯定是移动，但是例如行走慢走的情况下，点会变的密集，难以区分。
    - 主要区别：慢速移动点是速度慢导致的点密集，但具有**方向性**！！！点可能很密集，但是一直朝着某个方向，没有停留。移动点较好判断。
    - 判断标准：1m/s及以下（这是考虑到一般人的步行速度为1m/s，暂定以行走作为慢速移动的边界）
    - 关键地点：路边，小路。

3. 暂停点
    - 物理含义：短暂停留，例如等车，上厕所。虽然看起来停留了, 但是跟驻足活动点的停留并不一样.
    - 判断标准：时间五分钟以内，速度极低，在一小区域内。
    - 关键地点：路边，室内。

4. none: 不标注, 由于一些原因无法标注的直接标空.

### 注意事项

1. 在一个商城内，可能这里看一下店铺，那里看一下店铺。对于每个店铺，可能看起来像暂停点，但把时间范围拉大，它们应该属于同一商城的驻足点类型。需要灵活判断。

2. 标注时只考虑单条轨迹情况, 不考虑上下轨迹的情况. 

3. 热力图用来辅助但不应成为标准. 对于单个轨迹而言, 热力图密度最高的地方不一定是那条轨迹的驻足点.

4. 最重要的是物理含义，结合热力图，路线图，和具体地点进行判断。数值不应该是死标准。

## notice

代码默认执行单选框随点类型变换, 如果需要固定单选框请在index.html文件里修改对应的部分.

每次changeTrack都会导致从头开始.


## track id and numbers of track

track1: 81 points  
track2: 178 points  
track3: 590 points  
track4: 307 points  
track5: 270 points  
track6: 69 points  
track7: 42 points  
track8: 9 points  
track9: 54 points  
track10: 28 points  
track11: 21 points  
track12: 61 points  
track13: 166 points  
track14: 124 points  
track15: 310 points  
track16: 162 points  
track17: 45 points  
track18: 40 points  
track19: 55 points  
track20: 158 points  
track21: 63 points  
track22: 477 points  
track23: 22 points  
track24: 46 points  
track25: 242 points  
track26: 318 points  
track27: 206 points  
track28: 66 points  
track29: 27 points  
track30: 135 points  
track31: 70 points  
track32: 42 points  
track33: 55 points  
track34: 82 points  
track35: 472 points  
track36: 233 points  
track37: 84 points  
track38: 253 points  
track39: 58 points  
track40: 13 points  
track41: 69 points  
track42: 72 points  
track43: 149 points  
track44: 59 points  
track45: 72 points  
track46: 61 points  
track47: 41 points  
track48: 41 points  
track49: 43 points  
track50: 45 points  
track51: 78 points  
track52: 48 points  
track53: 72 points  
track54: 42 points  
track55: 239 points  
track56: 5 points  
track57: 3 points  
track58: 10 points  
track59: 214 points  
track60: 45 points  
track61: 51 points  
track62: 580 points  
track63: 70 points  
track64: 122 points  
track65: 74 points  
track66: 77 points  
track67: 154 points  
track68: 58 points  
track69: 632 points  
track70: 75 points  
track71: 45 points  
