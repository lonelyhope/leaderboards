# leaderboards

# Server状态
## 可用Api
`POST`  /gaon_month_album ： 对数据库进行查询
## 数据库表头信息
现在server代码连接的是测试用的云数据库，暂时记录不多，大家先测试是否能连接上。
现在只有`gaon_month_album`表可查询，我会稍后添加其他表，各个表表头在下面列出。看object的key即可，我懒得排版了_(:зゝ∠)_。(当然，`_id` 不用考虑……)


```javascript
// gaon_month_album
    rank: Number,
    changes: String,   
    album_title: String,   
    artist: String,  
    month_counts: Number,
    year_sum: Number,
    production: String,
    record_stamp: String 

// melon_monthly
{
       "_id" : ObjectId("5a9f464a541f4a0b188a73c8"),
        "rank" : "4",
        "changes" : "71",
        "song_title" : "뿜뿜",
        "artist" : "모모랜드 (MOMOLAND)",
        "album_title" : "GREAT!",
        "data_song_no" : 30816860,
        "record_stamp" : "201802"
}
// melon_weekly
{
        "_id" : ObjectId("5a9f3daa541f4a0b188a295f"),
        "rank" : "2",
        "changes" : "2",
        "song_title" : "뿜뿜",
        "artist" : "모모랜드 (MOMOLAND)",
        "album_title" : "GREAT!",
        "data_song_no" : 30816860,
        "record_stamp" : "20180219"
}
// mnet_monthly
{
        "_id" : ObjectId("5a9f57c2541f4a0b188a7baf"),
        "rank" : 4,
        "change" : "4",
        "song_title" : "러브119 (Love119) (Feat. MC몽)",
        "artist" : "케이윌(K.will)",
        "album" : "Love119",
        "record_stamp" : "2009-01"
}
// mnet_weekly
{                                                              
        "_id" : ObjectId("5a9f6c33541f4a0b188aab7f"),          
        "rank" : 4,                                            
        "change" : "-1",                                       
        "song_title" : "외톨이",                                  
        "artist" : "아웃사이더", 
        "album" : "Maestro",                                   
        "record_stamp" : "20090629"                            
}                                                              
// mnet_yearly
{
        "_id" : ObjectId("5a9f57c7541f4a0b188aa71d"),
        "rank" : 4,
        "change" : "0",
        "song_title" : "사랑..그게 뭔데",
        "artist" : "양파",
        "album" : "The Windows Of My Soul",
        "record_stamp" : "2007"
}