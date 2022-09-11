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
    - 主要标准：点聚集, 停留3分钟及以上。**(时间定为绝对指标)**
    - 停留时间: 从到达密集区域内的第一个点起, 到离开密集区域的最后一个点止. 这两点的时间戳相减.
    - 辅助标准：地点.

2. 移动点
    - 主要标准：移动速度大于1m/s.  长距离方向性. **(移动速度定为绝对指标)**

3. 慢速点
    - 主要标准：移动速度小于1m/s.  短距离方向性. **(移动速度定为绝对指标)**

4. 暂停点
    - 主要标准：点聚集, 停留时间小于3分钟, 小范围无方向性。**(时间定为绝对指标)**

5. none: 不标注, 由于一些原因无法标注的直接标空.

### 注意事项

1. 在一个商城内，可能这里看一下店铺，那里看一下店铺。对于每个店铺，可能看起来像暂停点，但把时间范围拉大，它们应该属于同一商城的驻足点类型。需要灵活判断。

2. 标注时只考虑单条轨迹情况, 不考虑上下轨迹的情况. 

3. 热力图用来辅助但不应成为标准. 对于单个轨迹而言, 热力图密度最高的地方不一定是那条轨迹的驻足点.

4. 结合热力图，路线图，和具体地点进行判断。

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
