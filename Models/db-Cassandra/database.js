var ExpressCassandra = require('express-cassandra');

var models = ExpressCassandra.createClient({
    clientOptions: {
        contactPoints: ['127.0.0.1'],
        protocolOptions: { port: 9042 },
        keyspace: 'amazon',
        queryOptions: {consistency: ExpressCassandra.consistencies.one}
    },
    ormOptions: {
        defaultReplicationStrategy : {
            class: 'SimpleStrategy',
            replication_factor: 1
        },
        migration: 'safe',
    }
});

var QAModel = models.loadSchema('qanda', {
    fields:{
      question : "text",
      answer : "text",
      votes : "int",
      answerer: "text",
      date : "text",
      listname : "text"
    },
    key:["votes", "date"]
});

QAModel.syncDB(function(err, result) {
    if (err) throw err;
    console.log('connected to CassandraDB!');
});

module.exports = { QAModel, models }