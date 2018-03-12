function add(a, b , cb){
    setTimeout(function() {
        if(typeof a != 'number' || typeof b != 'number')
        {
            return cb('tham so phai la kieu number',undefined);
        }
        cb(undefined,a+b);
    }, 1000);
};

add(3,4,function(err,result){
    if(err)
    {
      return  console.log(err);
    }
    return console.log(result);
});