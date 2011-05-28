module.exports = function ( req ) {
    var buf = [];
    var end = false;
    function onData ( chunk ) {
        buf.push(chunk);
    }
    function onEnd ( ) {
        end = true;
    }
    req.on('data', onData);
    req.on('end' , onEnd );
    req.ready = function ( ) {
        req.removeListener('data', onData);
        req.removeListener('end' , onEnd );
        while ( buf.length ) {
            req.emit('data', buf.pop());
        }
        if ( end ) {
            req.emit('end');
        }
    };
};

