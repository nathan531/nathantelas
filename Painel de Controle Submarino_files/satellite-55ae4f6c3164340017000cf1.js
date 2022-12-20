_satellite.pushAsyncScript(function(event, target, $variables){
  try{
  //Facebook WCA:
  //Disparo em todas as paginas
      !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
      n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
      document,'script','//connect.facebook.net/en_US/fbevents.js');
      fbq('init', '591317247613471');
      fbq('track', 'PageView');


  //Facebook  Product Listing
  //Disparo na página de Produtos (ViewContent)
  if(_satellite.getVar("getTypePage") == "HomeProduto"){
    fbq('track', 'ViewContent', {
      content_ids: crmWA_dataLayer[0]['objIdProd'],
      content_type: 'Product',
      content_name: crmWA_dataLayer[0]['objNomeProd'],
      content_line: crmWA_dataLayer[0]['objLinha'] ,
      content_category: crmWA_dataLayer[0]['objBreadCrumb'],
      value: crmWA_dataLayer[0]['objPrecoProd'],
      content_avaliable: 1
    });
  }else if(_satellite.getVar("getTypePage") == "Carrinho"  && location.hostname.toLocaleLowerCase().indexOf("carrinho.submarino.com.br") >= 0){
     function gera_produtoID() { 
          var p1 = "["; 
              for(var i=0; i < crmWA_dataLayer[0]['objCarrinhoProduto'].length; i++){ 
              p1 += crmWA_dataLayer[0]['objCarrinhoProduto'][i]['objId'] + ","; 
              }
                  p1=p1.substring(0,(p1.length - 1));
              p1 += "]";
          return p1;
         }

          function gera_produtoNome() { 
               var p1 = "["; 
              for(var i=0; i < crmWA_dataLayer[0]['objCarrinhoProduto'].length; i++){ 
                p1 += crmWA_dataLayer[0]['objCarrinhoProduto'][i]['objNome'] + ","; 
                }
                    p1=p1.substring(0,(p1.length - 1));
                p1 += "]";
                return p1;
              }
          function gera_produtoPreco() { 
              var p1 = "["; 
              for(var i=0; i < crmWA_dataLayer[0]['objCarrinhoProduto'].length; i++){ 
              p1 += crmWA_dataLayer[0]['objCarrinhoProduto'][i]['objPreco'] + ","; 
              }
                  p1=p1.substring(0,(p1.length - 1));
              p1 += "]";
              return p1;       
                       }    
          function gera_produtoSku() {  
               var p1 = "["; 
              for(var i=0; i < crmWA_dataLayer[0]['objCarrinhoProduto'].length; i++){ 
              p1 += crmWA_dataLayer[0]['objCarrinhoProduto'][i]['objSku'] + ","; 
              }
                  p1=p1.substring(0,(p1.length - 1));
              p1 += "]";
              return p1;
            }
          function gera_produtoLinha() { 
               var p1 = "["; 
                for(var i=0; i < crmWA_dataLayer[0]['objCarrinhoProduto'].length; i++){ 
                p1 += crmWA_dataLayer[0]['objCarrinhoProduto'][i]['objLinha'] + ","; 
                }
                    p1=p1.substring(0,(p1.length - 1));
                p1 += "]";
                return p1;
               }
            function gera_produtoDepartamento() { 
                      var p1 = "["; 
                      for(var i=0; i < crmWA_dataLayer[0]['objCarrinhoProduto'].length; i++){ 
                      p1 += crmWA_dataLayer[0]['objCarrinhoProduto'][i]['objDepartamento'] + ","; 
                      }
                  p1=p1.substring(0,(p1.length - 1));
              p1 += "]";
              return p1; 
            } 
  //Facebook  Product Listing
  //Disparo na página de Carrinho (AddtoCart)
     fbq.push(["track", "AddToCart", {
            content_type: 'Product',  
            content_ids: gera_produtoID(),
            content_name: gera_produtoNome(),
            content_price: gera_produtoPreco(),
            content_sku:  gera_produtoSku(),
              content_line:  gera_produtoLinha(),
              content_department: gera_produtoDepartamento() 
            }]);

  }else if(_satellite.getVar("getPageName") == "Checkout:Obrigado"){
    function gera_produtoIDFunil() { 
              var p1 = "["; 
              for(var i=0; i < crmWA_dataLayer[0]['objFunilProduto'].length; i++){ 
              p1 += crmWA_dataLayer[0]['objFunilProduto'][i]['objId'] + ","; 
              }
                  p1=p1.substring(0,(p1.length - 1));
              p1 += "]";
              return p1;
              }

  function gera_produtoNomeFunil() { 
              var p1 = "["; 
              for(var i=0; i < crmWA_dataLayer[0]['objFunilProduto'].length; i++){ 
              p1 += crmWA_dataLayer[0]['objFunilProduto'][i]['objNome'] + ","; 
              }
                  p1=p1.substring(0,(p1.length - 1));
              p1 += "]";
              return p1;
              }

  function gera_produtoPrecoFunil() { 
               var p1 = "["; 
              for(var i=0; i < crmWA_dataLayer[0]['objFunilProduto'].length; i++){ 
              p1 += crmWA_dataLayer[0]['objFunilProduto'][i]['objValorUnit'] + ","; 
              }
                  p1=p1.substring(0,(p1.length - 1));
              p1 += "]";
              return p1; 
            }   

  function gera_produtoSkuFunil() { 
              var p1 = "["; 
              for(var i=0; i < crmWA_dataLayer[0]['objFunilProduto'].length; i++){ 
              p1 += crmWA_dataLayer[0]['objFunilProduto'][i]['objSku'] + ","; 
              }
                  p1=p1.substring(0,(p1.length - 1));
              p1 += "]";
              return p1;  
            }
  function gera_produtoLinhaFunil() { 
              var p1 = "["; 
              for(var i=0; i < crmWA_dataLayer[0]['objFunilProduto'].length; i++){ 
              p1 += crmWA_dataLayer[0]['objFunilProduto'][i]['objLinha'] + ","; 
              }
                  p1=p1.substring(0,(p1.length - 1));
              p1 += "]";
              return p1; 
            }
    function gera_produtoDepartamentoFunil() { 
              var p1 = "["; 
              for(var i=0; i < crmWA_dataLayer[0]['objFunilProduto'].length; i++){ 
              p1 += crmWA_dataLayer[0]['objFunilProduto'][i]['objDepartamento'] + ","; 
              }
                  p1=p1.substring(0,(p1.length - 1));
              p1 += "]";
              return p1; 
            }   

    //Facebook  Product Listing
    //Disparo na página de Obrigado (Purchase)
        fbq.push(["track", "Purchase", {
        content_type: 'Product',  
        content_ids: gera_produtoIDFunil(),
        content_name: gera_produtoNomeFunil(),
        content_price: gera_produtoPrecoFunil(),
        content_sku:  gera_produtoSkuFunil(),
        content_line:  gera_produtoLinhaFunil(),
        content_department: gera_produtoDepartamentoFunil() 
    }]);
    //Facebook Conversion:
    //Disparo na página de Conversão
        fbq('track', '6007904185608', {
          currency: 'BRL',
          value : crmWA_dataLayer[0]['objFunilCustoPedido']
        });
    }else if(location.hostname.toLocaleLowerCase().indexOf("sacola.submarino.com.br") >= 0){
    $(document).on("dataLayer-ready", function(){
      try{
      if(_satellite.getVar("getTypePage") == "Carrinho"){
         function gera_produtoID() { 
              var p1 = "["; 
                  for(var i=0; i < crmWA_dataLayer[0]['objCarrinhoProduto'].length; i++){ 
                  p1 += crmWA_dataLayer[0]['objCarrinhoProduto'][i]['objId'] + ","; 
                  }
                      p1=p1.substring(0,(p1.length - 1));
                  p1 += "]";
              return p1;
             }

          function gera_produtoNome() { 
               var p1 = "["; 
              for(var i=0; i < crmWA_dataLayer[0]['objCarrinhoProduto'].length; i++){ 
                p1 += crmWA_dataLayer[0]['objCarrinhoProduto'][i]['objNome'] + ","; 
                }
                    p1=p1.substring(0,(p1.length - 1));
                p1 += "]";
                return p1;
              }
          function gera_produtoPreco() { 
              var p1 = "["; 
              for(var i=0; i < crmWA_dataLayer[0]['objCarrinhoProduto'].length; i++){ 
              p1 += crmWA_dataLayer[0]['objCarrinhoProduto'][i]['objPreco'] + ","; 
              }
                  p1=p1.substring(0,(p1.length - 1));
              p1 += "]";
              return p1;       
                       }    
          function gera_produtoSku() {  
               var p1 = "["; 
              for(var i=0; i < crmWA_dataLayer[0]['objCarrinhoProduto'].length; i++){ 
              p1 += crmWA_dataLayer[0]['objCarrinhoProduto'][i]['objSku'] + ","; 
              }
                  p1=p1.substring(0,(p1.length - 1));
              p1 += "]";
              return p1;
            }
          function gera_produtoLinha() { 
               var p1 = "["; 
                for(var i=0; i < crmWA_dataLayer[0]['objCarrinhoProduto'].length; i++){ 
                p1 += crmWA_dataLayer[0]['objCarrinhoProduto'][i]['objLinha'] + ","; 
                }
                    p1=p1.substring(0,(p1.length - 1));
                p1 += "]";
                return p1;
               }
            function gera_produtoDepartamento() { 
                      var p1 = "["; 
                      for(var i=0; i < crmWA_dataLayer[0]['objCarrinhoProduto'].length; i++){ 
                      p1 += crmWA_dataLayer[0]['objCarrinhoProduto'][i]['objDepartamento'] + ","; 
                      }
                  p1=p1.substring(0,(p1.length - 1));
              p1 += "]";
              return p1; 
            } 
  //Facebook  Product Listing
  //Disparo na página de Carrinho (AddtoCart)
     fbq.push(["track", "AddToCart", {
            content_type: 'Product',  
            content_ids: gera_produtoID(),
            content_name: gera_produtoNome(),
            content_price: gera_produtoPreco(),
            content_sku:  gera_produtoSku(),
              content_line:  gera_produtoLinha(),
              content_department: gera_produtoDepartamento() 
            }]);
      }
    }catch(e){}
   });
}
}catch(e){}
});
