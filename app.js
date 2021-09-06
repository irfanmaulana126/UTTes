$(document).ready(function(){
    $('#input_nilai').on('keyup',function(){
        var nilai = $(this).val();
        if(nilai >= 90){
            $('#grade').html('A');
        }else if(nilai >= 80 && nilai <= 89){
            $('#grade').html('B');
        }else if(nilai >= 70 && nilai <= 79){
            $('#grade').html('C');
        }else if(nilai >= 60 && nilai <= 69){
            $('#grade').html('D');
        }else if(nilai >= 0 && nilai <= 59){
            $('#grade').html('E');
        }else{
            $('#grade').html('-');
        }
    })
    $('#input_angka').on('keyup',function(){
        var nilai = $(this).val();
        if(nilai != ''){
            if( nilai % 2 == 0){
                $('#ganjil_genap').html('Genap');
            }else{
                $('#ganjil_genap').html('Ganjil');
            }
        } 
    })
    $('#input_angka_deret').on('keyup',function(){
        var nilai = $(this).val();
        if(nilai != ''){
            arr = nilai.split(',');
            all = [];
            arr.map(function (x) { 
                all.push(parseInt(x))
              });
              var max = Math.max.apply(Math ,all);
              var min = Math.min.apply(Math ,all);
              var sum = 0;
                for( var i = 0; i < all.length; i++ ){
                    sum += parseInt( all[i], 10 );
                }
              if(max === 'NaN' && min === 'NaN'){
                console.log("pastikan Input anda benar");
              }else{
                var avg = sum/all.length;
                  html = 'Nilai Max = '+max+', Nilai Min ='+min+' dan Nilai Rata-Rata='+avg;
                  $('#info').html(html);
              }
        } 
    })
    $('#palindrome').on('keyup',function(){
        var str = $(this).val();
        var splitted = str.split("");
        var reversed = splitted.reverse("");
        var joined = reversed.join("");
        var ret = joined.toLowerCase().replace(/[^0-9a-z]/gi, '') == str.toLowerCase().replace(/[^0-9a-z]/gi, '')
        $('#info_palindrome').html(ret)
    })

    $('#cek').on('click',function(){
        var thn1 = parseInt($('#thn1').val());
        var thn2 = parseInt($('#thn2').val());
        html ='';
        for (thn1; thn1 <= thn2; thn1++) {
            html += '&nbsp;&nbsp;&nbsp;&nbsp;'+thn1+' '+leapYear(thn1)+'<br>';
        }
        $('#Hasil_pencarian').html(html);
    })

    function leapYear(year)
    {
        if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
            return 'Tahun kabisat';
        }else{
            return 'Bukan Tahun kabisat';
        }
    }

    $('#reverse').on('keyup',function(){
        var str = $(this).val();
        var splitted = str.split("");
        var reversed = splitted.reverse("");
        $('#Hasil_kebalikan').html(reversed)
    })
    var arr = ["Slawi","Bengkulu","Mamuju","Medan","Bontang","Timika","Slawi","Mamuju","Solo","Palembang","Banjarmasin"];
    var uniqueArr = [];
    $.each(arr, function(i, el){
        if($.inArray(el, uniqueArr) === -1) uniqueArr.push(el);
    });
    $('#Output').html(uniqueArr.toString())
})