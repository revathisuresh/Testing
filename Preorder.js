 
 
 
 describe('PreorderTestSuite', function() {
	var obj=  require("./Jsobjectdemo.js");
  var using=  require("jasmine-data-provider");
  var d=  require("./data.js");
  
  it('psc url', function() {
	var EC = protractor.ExpectedConditions;

   obj.getURL();
	
  expect (browser.getTitle()).toBe('PaySchools Central');
  
  
  },500000);

  using(d.Datadrivenpre, function (data, description) {
		

    it('TS-'+description , function() {
  
      browser.ignoreSynchronization = true;
      //obj.getURL();
      var EC = protractor.ExpectedConditions;
  
          obj.email.sendKeys(data.emailm);
                        
           
                    obj.password.sendKeys(data.passwordm);
  
                    obj.login.click().then(function(){
                           browser.sleep(25000);
                           
                    });
   //var EC1 = protractor.ExpectedConditions;
   //browser.wait(EC1.visibilityOf(obj.freeclosemf.click()), 9000);
            
                  /*obj.freeclosemf.click().then(function(){
                      browser.sleep(1000);
                            
                     });*/
    
        
         // });
        
         
  
    expect((obj.preorder).isEnabled()).toBe(true);
  
         obj.preorder.click().then(function(){
            browser.sleep(8000);
          
            });
  
    
      obj.backtopsc.click().then(function(){
              browser.sleep(10000);
            
              });
       /* obj.freeclosemf.click().then(function(){
                            browser.sleep(1000);
                                  
                           });*/
        expect((obj.Dashboard).isPresent()).toBe(true);
        browser.sleep(5000);
  
         obj.preorder.click().then(function(){
                browser.sleep(15000);
              
                });
      
  
      
    obj.Addtocart4.click().then(function(){
            browser.sleep(5000);
          
            });
  
      obj.Addtocart7.click().then(function(){
              browser.sleep(5000);
            
              });
  
        obj.Addtocart6.click().then(function(){
                browser.sleep(3000);
              
                });
  
      obj.checkoutmmo.click().then(function(){
              browser.sleep(3000);
            
              });
  
        obj.placeorder.click().then(function(){
                browser.sleep(25000);
              
              });
        expect(obj.zerodollar.getText()).toBe(data.zerodollar);
              obj.zerodollar.getText().then(function(text){
              console.log(text);
              browser.sleep(1000);
            
              });
  
        expect(obj.reduced.getText()).toBe(data.reduced);
            obj.reduced.getText().then(function(text){
            console.log(text);
            browser.sleep(1000);
          
            });
  
      expect(obj.denied.getText()).toBe(data.denied);
            obj.denied.getText().then(function(text){
            console.log(text);
            browser.sleep(1000);
          
            });
         
  
  
             obj.preorder.click().then(function(){
                    browser.sleep(8000);
                  
                    });
  
  
  
  
    obj.addingcart.click().then(function(){
            browser.sleep(3000);
          
            });
      obj.Addtocart1.click().then(function(){
             browser.sleep(3000);
            
              });
  
        obj.Addtocart2.click().then(function(){
               browser.sleep(3000);
              
                });
          obj.Addtocart3.click().then(function(){
                 browser.sleep(3000);
                
                  });
            /*obj.Addtocart4.click().then(function(){
                   browser.sleep(3000);
                  
                    });*/
    
        
       obj.checkoutmmo.click().then(function(){
              browser.sleep(3000);
            
              });
  
        obj.placeorder.click().then(function(){
                browser.sleep(10000);
              
              });
  /*
        browser.getAllWindowHandles().then(function(handles){
          browser.waitForAngularEnabled(false);
        browser.switchTo().window(handles[1]).then(function(){
          browser.sleep(8000);
          
        });
    
      });
    */
  
   expect(browser.getCurrentUrl()).toEqual('https://dev.payschoolscentral.com/');  
  
   browser.sleep(5000);
  
  /*expect(obj.preexp.getText()).toBe(data.preexp);
          obj.preexp.getText().then(function(text){
          console.log(text);
          browser.sleep(4000);*/
        
         // });
     obj.clickonselectmmo.click().then(function(){
          browser.sleep(3000);
        });
      
        obj.continuemmo.click().then(function(){
          browser.sleep(8000);
        });
        obj.paymentcheckmmo.click().then(function(){
          browser.sleep(2000);
        });
        obj.makepaymentmmo.click().then(function(){
          browser.sleep(10000);
        });
  
       expect(obj.rtdmmo.getText()).toBe(data.rtdmmo);
            obj.rtdmmo.getText().then(function(text){
            console.log(text);
            browser.sleep(1000);
          
            });
  
       obj.rtdmmo.click().then(function(){
            browser.sleep(5000);
          });
  
  
    /*obj.freeclosepre.click().then(function(){
                      browser.sleep(6000);
                            
                      });*/
        obj.message.click().then(function(){
            browser.sleep(8000);
          
            });
  
      obj.message1.click().then(function(){
                browser.sleep(5000);
              
                });
          
          
              expect(obj.message2.getText()).toContain("(Preorder)");
  
                //expect(obj.message2.getText()).toContain("Food Service");
  
                      browser.sleep(8000);
  
                 obj.close.click().then(function(){
                        browser.sleep(5000);
                      
                        });
  
         
               obj.preorderp.click().then(function(){
                  browser.sleep(10000);
                
                  });
           
             
            expect(obj.purchasebut.getText()).toContain(data.purchasebut);
                  obj.purchasebut.getText().then(function(text){
                  console.log(text);
                  browser.sleep(4000);
                
                  });
            obj.purchasebut.click().then(function(){
                    browser.sleep(5000);
                  
                    });
   
              obj.removemeal.click().then(function(){
                      browser.sleep(5000);
                    
                      });
  
          obj.addingcart.click().then(function(){
                  browser.sleep(5000);
                
                  });
  
          /*obj.Addtocart.click().then(function(){	 
            browser.sleep(8000);  
          });*/
          
        obj.Addtocart5.click().then(function(){
               browser.sleep(5000);
              
                });
          /*obj.Addtocart3.click().then(function(){
                 browser.sleep(3000);
                
                  });obj.Addtocart4.click().then(function(){
                   browser.sleep(3000);
                  
                    });*/
          obj.checkoutmmo.click().then(function(){
                  browser.sleep(3000);
                
                  });
      
            obj.placeorder.click().then(function(){
                    browser.sleep(25000);
                  
                  });
  
            expect(obj.preordermeal.getText()).toBe(data.preordermeals);
                  obj.preordermeal.getText().then(function(text){
                  console.log(text);
                  browser.sleep(1000);
                
                  });
  
            obj.preorder.click().then(function(){
                    browser.sleep(8000);
                  
                    });
  
              obj.viewcart.click().then(function(){
                      browser.sleep(5000);
                    
                      });
                obj.emptycart.click().then(function(){
                        browser.sleep(5000);
                      
                        });
  
                  obj.emptycartconfirm.click().then(function(){
                          browser.sleep(15000);
                        
                          });
  
                    
                  
  
                    obj.backtopsc.click().then(function(){
                            browser.sleep(10000);
                          
                            });
                                   
                    
                    expect(obj.checkcart.getText()).toBe(data.checkcart);
                          obj.checkcart.getText().then(function(text){
                          console.log(text);
                          browser.sleep(1000);
                        
                          });
  
  
                    obj.preorder.click().then(function(){
                            browser.sleep(8000);
                          
                            });
  
                      obj.addingcart.click().then(function(){
                              browser.sleep(5000);
                            
                              });
  
  obj.Addtocart5.click().then(function(){
               browser.sleep(5000);
              
                });
  
  
          obj.checkoutmmo.click().then(function(){
                  browser.sleep(3000);
                
                  });
      
            obj.placeorder.click().then(function(){
                    browser.sleep(25000);
                  
                  });
  
  
            obj.delete.click().then(function(){
                    browser.sleep(3000);
                  
                  });
            obj.yes.click().then(function(){
                    browser.sleep(3000);
                  
                  });
            obj.preorder.click().then(function(){
                    browser.sleep(25000);
                  
                    });
              
  
              //expect(obj.Addtocart1.getText()).toBe(data.AddtoCart);
                 // obj.Addtocart1.getText().then(function(text){
                 // console.log(text);
                 // browser.sleep(4000);
                
                 // });
              
            obj.Addtocart5.click().then(function(){
                    browser.sleep(5000);
                  
                    });
  
              obj.checkoutmmo.click().then(function(){
                      browser.sleep(3000);
                    
                      });
          
                obj.placeorder.click().then(function(){
                        browser.sleep(30000);
                      
                      });
            
          //browser.navigate().back();
  
          obj.rtd21.click().then(function(){
                              browser.sleep(10000);
                                    
                             });
           /* obj.freeclosemf.click().then(function(){
                              browser.sleep(5000);
                                    
                             });*/
  
            // var EC46 = protractor.ExpectedConditions;
              //  browser.wait(EC46.visibilityOf(obj.addcart21.click()),9000);
           
           obj.addcart.click().then(function(){
             browser.sleep(4000);
             
             });
           
           obj.amount21.sendKeys(data.amount21).then(function(){
             browser.sleep(3000);
             
             });
           obj.amounttoadd21.click().then(function(){
             browser.sleep(5000);
             
           });
           
           obj.clickoncart21.click().then(function(){
           browser.sleep(5000);
           
           });
           
           
             ///obj.clickoncart21.click().then(function(){
               //browser.sleep(5000);
               
            // });
           
            
             obj.clickonselect21.click().then(function(){
               browser.sleep(4000);
             });
           
             obj.continue21.click().then(function(){
               browser.sleep(4000);
             });
             obj.paymentcheck21.click().then(function(){
               browser.sleep(4000);
             });
             obj.makepayment21.click().then(function(){
               browser.sleep(8000);
             });
           
             obj.return.click().then(function(){
               browser.sleep(8000);
             });
           
           
           /*obj.freeclose20pa.click().then(function(){
             browser.sleep(4000);
             });*/
  
           obj.message.click().then(function(){
                  browser.sleep(8000);
                
                  });
        
            obj.message1.click().then(function(){
                      browser.sleep(10000);
                    
                      });
               
                    expect(obj.message2.getText()).toContain("(Preorder)");
        
                      expect(obj.message2.getText()).toContain("Food Service");
        
          
                            browser.sleep(8000);
                      obj.close.click().then(function(){
                              browser.sleep(3000);
                            
                              });
           
             obj.paymenthistory.click().then(function(){
             browser.sleep(3000);
             });
           
             obj.typesel.click().then(function(){
               browser.sleep(2000);
             });
           
             obj.preorder1.click().then(function(){
               browser.sleep(4000);
             });
           obj.datesel.click().then(function(){
                 browser.sleep(5000);
               });
             
             obj.dateselect.click().then(function(){
               browser.sleep(5000);
             });
           /*
           expect(obj.amou.getText()).toBe(data.amou);
           obj.amou.getText().then(function(text){
           console.log(text);
           browser.sleep(3000);
           
           });
           */
           expect(obj.success.getText()).toBe(data.success);
           obj.success.getText().then(function(text){
           console.log(text);
           browser.sleep(1000);
           
           });
           
             
  
  //download
             obj.createpdfbuttonpay.click().then(function(){
              browser.sleep(2000);
            });
            obj.sendemailpay.click().then(function(){
              browser.sleep(8000);
            });
            obj.okpay.click().then(function(){
              browser.sleep(4000);
            });
            obj.createpdfbuttonpay.click().then(function(){
              browser.sleep(4000);
            });
            obj.downloadpay.click().then(function(){
              browser.sleep(4000);
            });
            obj.createexcelpay.click().then(function(){
              browser.sleep(4000);
            });
            obj.sendemailpay.click().then(function(){
              browser.sleep(8000);
            });
            obj.okpay.click().then(function(){
              browser.sleep(4000);
            });
            obj.createexcelpay.click().then(function(){
              browser.sleep(4000);
            });
            obj.downloadpay.click().then(function(){
              browser.sleep(6000);
            });
  
  
  //no records found
            browser.refresh();
            browser.sleep(6000);
  
    obj.typesel1.click().then(function(){
      browser.sleep(5000);
    });
  
    obj.preorder1.click().then(function(){
      browser.sleep(5000);
    });
  
    obj.datesel.click().then(function(){
      browser.sleep(5000);
    });
  
    obj.cussel.click().then(function(){
      browser.sleep(5000);
    });
  
    obj.fromdatecal.click().then(function(){
      browser.sleep(5000);
    });
   // obj.datefebsel.click().then(function(){
     // browser.sleep(2000);
    //});
  
    obj.yeardrop.click().then(function(){
      browser.sleep(5000);
    });
    
    obj.yearsel.click().then(function(){
      browser.sleep(5000);
    });
    obj.monsel.click().then(function(){
      browser.sleep(5000);
    });
    obj.firstsel.click().then(function(){
      browser.sleep(5000);
    });
    obj.enddatesel.click().then(function(){
      browser.sleep(5000);
    });
  
    obj.yeardrop1.click().then(function(){
      browser.sleep(5000);
    });
    obj.yearsel1.click().then(function(){
      browser.sleep(5000);
    });
    obj.monsel1.click().then(function(){
      browser.sleep(5000);
    });
    obj.firstsel1.click().then(function(){
      browser.sleep(5000);
    });
    obj.filterbut.click().then(function(){
      browser.sleep(8000);
    });
    expect(obj.expres.getText()).toBe(data.expres);
    obj.expres.getText().then(function(text){
      console.log(text);
      browser.sleep(2000);
   
   });
   
            
              });
  },250000);
   });
  