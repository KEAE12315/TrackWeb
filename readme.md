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

## type of point

- activity 驻足活动点: 停留较长时间, 进行一定活动的区域.
- move 移动点: 此时在移动中
- slow 慢速移动点: 相比移动点, 速度更慢, 但有方向性, 并不停留.
- tempory 暂时停止点: 暂时停止的点, 例如等公交和出租车. 虽然看起来停留了, 但是跟驻足活动点的停留并不一样.
- none 空: 不标注, 由于一些原因无法标注的直接标空.

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
