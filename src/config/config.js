/** Archivo de configuración */

const config = {
    "redis_url": "redis://redis-15697.c89.us-east-1-3.ec2.cloud.redislabs.com:15697",
    "redis_pass": "g7Kw69YQNrbHwmHkTkUnROT0dSUO5u3P",
    "node_port": 8070,
    "api": "https://simple.ripley.cl/api/v2",
    "endpoints": {
        "products": "/products?format=json&partNumbers=",
        "product": "/products/"
    },
    "skus": [
        "2000373380547",
        "2000373057739",
        "2000369527338",
        "2000372408112",
        "2000373604469",
        "2000373433229",
        "2000373430853",
        "2000372403506",
        "2000373056725",
        "2000373605732",
        "2000370969035",
        "2000374171670",
        "2000373434585",
        "2000373374676",
        "2000372403599",
        "2000373376502",
        "2000373606197",
        "2000372407979",
        "2000374171816",
        "2000375529876",
        "2000373680494",
        "2000373375932",
        "2000373606760",
        "2000373351691",
        "2000373342491"
    ]
}

module.exports = config;