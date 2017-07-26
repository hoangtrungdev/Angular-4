angular.module('halleystore', ['ngCookies', 'firebase', 'angularUtils.directives.dirPagination'])
  .controller('cart', function($scope, $cookies, $cookieStore,$location, $anchorScroll, $firebaseArray, $firebaseObject) {
    var ref = new Firebase('https://halley.firebaseio.com/');
    //var ref = new Firebase('https://bigbag-promotion.firebaseio.com/');
    $scope.customers = $firebaseArray(ref.child('customers'));
    $scope.products = $firebaseArray(ref.child('products'));
    $scope.cities = $firebaseArray(ref.child('city'));
    $scope.districts = $firebaseArray(ref.child('district'));
    $scope.towns = $firebaseArray(ref.child('town'));
    $scope.name_error = false;
    $scope.address_error = false;
    $scope.phone_error = false;
    $scope.edit_address = false;
    $scope.product_loading = true;
    $scope.city_loading = true;

    $scope.products.$loaded(function(){
      $scope.product_loading = false;
    });
    $scope.cities.$loaded(function(){
      $scope.city_loading = false;
    });

    $scope.step_1 = true;
    $scope.step_2 = false;
    $scope.step_3 = false;
    $scope.step_4 = false;
    $scope.step_5 = false;

    $scope.showcarttable = true;
    $scope.itemsincart = $cookieStore.get('itemsincart');
    //$cookieStore.remove('discount');
    $scope.totalcal = $cookieStore.get('totalcal');
    $scope.discount = $cookieStore.get('discount');

    $scope.backstep1 = function(){
      $scope.step_1 = true;
      $scope.step_2 = false;
      $scope.step_3 = false;
    }

    $scope.step2 = function(){
      $scope.no_phone = false;
      $scope.address = '';
      $scope.city_id = false;
      $scope.district_id = false;
      $scope.town_id = false;
      $scope.customer_id = false;
      if(!$scope.phone){
        $scope.no_phone = true;
      }else{
        
        $scope.customer_id = false;
        $scope.name = '';
        $scope.customers.$loaded(function(){
          for (var i = 0; i < $scope.customers.length; i++) {
            if($scope.customers[i].phone == $scope.phone){
              $scope.old_customer = true;
              $scope.name = $scope.customers[i].name;
              $scope.address = $scope.customers[i].address;
              $scope.city_id = $scope.customers[i].city;
              $scope.district_id = $scope.customers[i].district;
              $scope.town_id = $scope.customers[i].town;
              $scope.customer_id = $scope.customers[i].$id;
            }
          };
          $scope.districts.$loaded(function(){
            for (var j = 0; j < $scope.districts.length; j++) {
              if($scope.districts[j].$id==$scope.district_id){
                $scope.fee = parseInt($scope.districts[j].fee);
              };
            };
          });

          if($scope.old_customer){
            $scope.step_1 = false;
            $scope.step_3 = true;
          }else{
            $scope.step_1 = false;
            $scope.step_2 = true;
          }
          if(!$scope.address){
            $scope.edit_address = true;
          }else{
            $scope.edit_address = false;
          }
        });
      };
      $scope.discounted = false;
        
    };

    $scope.backstep2 = function(){
      $scope.step_2 = true;
      $scope.step_3 = false;
      $scope.step_4 = false;
    }

    $scope.step3 = function(data){
      $scope.no_name = false;
      if(!$scope.name){
        $scope.no_name = true;
      }else{
        $scope.step_2 = false;
        $scope.step_3 = true;
      };  
    };

    $scope.backstep3 = function(){
      $scope.step_3 = true;
      $scope.step_4 = false;
    }

    $scope.step4 = function(){
      $scope.no_city = false;
      $scope.no_district =false;
      $scope.no_town = false;
      $scope.no_address = false;
      $scope.next_step = true;
      if(!$scope.city_id){
        $scope.no_city = true;
        $scope.next_step = false;
      };
      if(!$scope.district_id){
        $scope.no_district = true;
        $scope.next_step = false;
      };
      if(!$scope.town_id){
        $scope.no_town = true;
        $scope.next_step = false;
      };
      if(!$scope.address){
        $scope.no_address = true;
        $scope.next_step = false;
      };
      if($scope.next_step){
        $scope.step_3 = false;
        $scope.step_4 = true;
      };
      $location.hash('carttop');
      $anchorScroll();
    };

    $scope.showEditAddress = function(){
      $scope.edit_address = true;
    }

    $scope.setCity = function(id){
      $scope.city_id = id;
      $scope.district_id = false;
      $scope.town_id = false;
      $scope.fee = false;
    };
    $scope.setCheckCity = function(id){
      $scope.check_city_id = id;
      $scope.check_district_id = false;
    };

    $scope.setDistrict = function(id,fee){
      $scope.district_id = id;
      $scope.town_id = false;
      $scope.fee = parseInt(fee);
    };

    $scope.setCheckDistrict = function(id){
      $scope.check_district_id = id;
    };

    $scope.setTown = function(id){
      $scope.town_id = id;
    };

    $scope.addtocart = function(code,id,avatar,link,saleoff,normal_price,sale_price,price_old,price_new){
      $scope.showcarttable = true;
      $scope.order_sent = false;
      $scope.existed = false;

      if($scope.itemsincart){
        for (i = 0; i < $scope.itemsincart.length; i++) {
          if($scope.itemsincart[i].id==id){
            $scope.existed = true;
          }
        };
      }
      
      if(!$scope.existed){
        if($scope.totalcal){
          $scope.totalcal += parseInt(normal_price);
        }else{
          $scope.totalcal = parseInt(normal_price);
        };
        $cookieStore.put('totalcal',$scope.totalcal);

        //giảm giá do khuyến mãi
        if(saleoff=='1'){
          if($scope.discount){
              $scope.discount += (parseInt(normal_price) - parseInt(sale_price));
          }else{
              $scope.discount = parseInt(normal_price) - parseInt(sale_price);
          };
        }else{
          if(!$scope.discount){
            $scope.discount = 0;
          }
        };
        $cookieStore.put('discount',$scope.discount);
        var item = [{
          code:code,
          id:id,
          avatar:avatar,
          link:link,
          saleoff:saleoff,
          normal_price:normal_price,
          sale_price:sale_price,
          quantity: 1
        }];
        if($cookieStore.get('itemsincart')){
          $scope.itemsincart = $cookieStore.get('itemsincart').concat(item);
        }else{
          $scope.itemsincart = item;
        };
        $cookieStore.put('itemsincart',$scope.itemsincart);
      };
      
    };

    $scope.addquantity = function(index){
      $scope.itemsincart[index].quantity += 1;
      if($scope.itemsincart[index].saleoff=='1'){
        $scope.discount += (parseInt($scope.itemsincart[index].normal_price) - parseInt($scope.itemsincart[index].sale_price));
      };
      $scope.totalcal += parseInt($scope.itemsincart[index].normal_price);
      $cookieStore.put('itemsincart',$scope.itemsincart);
      $cookieStore.put('totalcal',$scope.totalcal);      
      $cookieStore.put('discount',$scope.discount);
      console.log($scope.discount);     
    };

    $scope.removequantity = function(index){
      if($scope.itemsincart[index].quantity >1){
        if($scope.itemsincart[index].saleoff=='1'){
          $scope.discount -= (parseInt($scope.itemsincart[index].normal_price) - parseInt($scope.itemsincart[index].sale_price));
        };
        $scope.totalcal -= parseInt($scope.itemsincart[index].normal_price);
        $scope.itemsincart[index].quantity -= 1;
        $cookieStore.put('itemsincart',$scope.itemsincart);
        $cookieStore.put('totalcal',$scope.totalcal);
        $cookieStore.put('discount',$scope.discount);
      };  
    };

    $scope.showorderinfo = function(){
      $scope.hide_note = true;
      $scope.showcarttable = false;
      $location.hash('carttop');
      $anchorScroll();
    };

    $scope.cancelshoworderinfo = function(){
      $scope.showcarttable = true;
    };

    // xóa sản phẩm khỏi đơn hàng
    $scope.removeitem = function(index){
      if($scope.itemsincart[index].saleoff=="1"){
        $scope.discount = $scope.discount - (parseInt($scope.itemsincart[index].quantity)*(parseInt($scope.itemsincart[index].normal_price) - parseInt($scope.itemsincart[index].sale_price)));
      };
      $scope.totalcal = $scope.totalcal - (parseInt($scope.itemsincart[index].quantity)*parseInt($scope.itemsincart[index].normal_price));
      $scope.itemsincart.splice(index,1);
      $cookieStore.put('itemsincart',$scope.itemsincart);
      $cookieStore.put('totalcal',$scope.totalcal);
      $cookieStore.put('discount',$scope.discount);
    };

    $scope.insertOrder = function(){      
      ref.child('newOrder').push({ 
          itemsincart: angular.toJson($scope.itemsincart), 
          totalcal: $scope.totalcal, 
          discount: $scope.discount,
          customer_name: $scope.name,
          customer_address: $scope.address,
          customer_phone: $scope.phone,
          customer_id : $scope.customer_id,
          fee: $scope.fee,
          city: $scope.city_id,
          district: $scope.district_id,
          town: $scope.town_id,
          handle: 0,
          startedAt: Firebase.ServerValue.TIMESTAMP
        }, function(){
      });
      $scope.order_sent = true;
      $cookieStore.remove('itemsincart');
      $cookieStore.remove('discount');
      $cookieStore.remove('totalcal');
      $scope.itemsincart = [];
      $scope.discount = 0;
      $scope.totalcal = 0;
      $scope.fee = false;
      $scope.step_1 = true;
      $scope.step_2 = false;
      $scope.step_3 = false;
      $scope.step_4 = false;
      $scope.step_5 = false;
    }
  });