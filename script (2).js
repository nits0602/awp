app=angular.module('myapp',[]);
app.controller('myctrl',function($scope){
    var data=[{fname:null,lname:null,email:null,phone:null},];
    $scope.data = data; 
    $scope.add=function(){
        a=false;
        angular.forEach($scope.data, function(el){
            if($scope.email==el.email)
            {
                a = true;
            }
        });
        if(a){
            alert("Email already Registred!")
        }
        else{
            data.push({fname:$scope.fname,lname:$scope.lname,email:$scope.email,phone:$scope.phone});
        }
    };
    $scope.clear=function(){
        $scope.fname=null;
        $scope.lname=null;
        $scope.email=null;
        $scope.pwd=null;
        $scope.phone=null;
        

    };
});
