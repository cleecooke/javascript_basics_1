function reverseString(str) {
    var reversedString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        console.log(str[i]);
        reversedString += str[i];
    }
    console.log(reversedString);
    return reversedString;
}
reverseString("hello");

var array = [1,2,3,4];
>>
>>   let aLen = array.length,
>>       i    = 0;
>>
>>   for (i; i < aLen; i += 1) {
>>     console.log(array[i]);
>>   }
>>
>>   return false;
>> }