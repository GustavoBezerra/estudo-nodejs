module.exports = function(){
    this.lista = function(connection, callback){
        connection.query('select * from produtos',callback);
    };
    
    this.carrega = function (connection, id, callback) {
        
    };
    return this;
}