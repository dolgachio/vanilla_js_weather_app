function fromDms(){var e=(dms.latitude.degrees+dms.latitude.minutes/60+dms.latitude.seconds/3600).toFixed(precD),t=(dms.longitude.degrees+dms.longitude.minutes/60+dms.longitude.seconds/3600).toFixed(precD);d.writeData(e,t,!1),fromD("latitude")}function fromDm(){var e=(dms.latitude.degrees+dms.latitude.minutes/60).toFixed(precD),t=(dms.longitude.degrees+dms.longitude.minutes/60).toFixed(precD);d.writeData(e,t,!1),fromD("latitude")}function fromD(e){var t=d[e].degrees,s=truncate(t),i=60*(t-s),m=60*(60*(t-s)-truncate(i));dms[e].degrees||(dms[e].degrees=s,dms[e].minutes=truncate(i),dms[e].seconds=m.toFixed(precDms)),dm[e].degrees||(dm[e].degrees=s,dm[e].minutes=i.toFixed(precDm)),"latitude"==e&&fromD("longitude"),output()}function truncate(e){return e>0?Math.floor(e):Math.ceil(e)}