var moduleData = {};

moduleData.dump = function( obj ){
    console.log( JSON.parse( JSON.stringify( obj ) ) );
}

module.exports = moduleData;