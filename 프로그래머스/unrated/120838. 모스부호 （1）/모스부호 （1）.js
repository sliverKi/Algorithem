function solution(letter) {
    let answer = '';
    const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    }
    morseWords=letter.split(' ')
    for(let i=0; i<morseWords.length;i++){
        if (morse[morseWords[i]]) 
            answer += morse[morseWords[i]];
        else answer += ' ';
    }
    return answer;
}