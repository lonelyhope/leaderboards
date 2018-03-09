

::mongoimport --db test --collection melon_weekly --drop   --jsonArray --file F:\CODE\spiderLearning\spider\data\melon_weekly_chart.json

::mongoimport --db kp1 --collection melon_monthly --drop   --jsonArray --file F:\CODE\spiderLearning\spider\data\melon_monthly_chart_201803.json

::mongoimport --db kp1 --collection gaon_monthly_album --drop   --jsonArray --file F:\CODE\spiderLearning\spider\data\gaon_monthly_album_chart_2017_12.json
::mongoimport --db kp1 --collection melon_weekly --drop   --jsonArray --file F:\CODE\spiderLearning\spider\data\melon_weekly_chart.json

:: MNET
rem mongoimport --db kp1 --collection mnet_monthly --drop   --jsonArray --file F:\CODE\spiderLearning\spider\data\mnet_monthly_song_chart_2018_03.json
rem mongoimport --db kp1 --collection mnet_yearly --drop   --jsonArray --file F:\CODE\spiderLearning\spider\data\mnet_yearly_song_chart_2018.json
mongoimport --db kp1 --collection mnet_weekly --drop  --jsonArray --file F:\CODE\spiderLearning\spider\data\mnet_weekly_song_chart_.json
