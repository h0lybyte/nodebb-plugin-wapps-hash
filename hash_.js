// Credits to: https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest
// Just added a tweak :D
         
          function hash(type, str) {
            var buffer = new TextEncoder("utf-8").encode(str);
            return crypto.subtle.digest(type, buffer).then(function (hash) {
              return hex(hash);
            });
          }
          
          function hex(buffer) {
            var hexCodes = [];
            var view = new DataView(buffer);
            for (var i = 0; i < view.byteLength; i += 4) {
              var value = view.getUint32(i)
              var stringValue = value.toString(16)
              var padding = '00000000'
              var paddedValue = (padding + stringValue).slice(-padding.length)
              hexCodes.push(paddedValue);
            }
            return hexCodes.join("");
          }

    function hash_ (typ, str)
        {
              $('#_hash').text("Hashing");
              
              hash(typ,str).then(function(digest) {
                  $('#_hash').text(digest);
              }); 
        }
