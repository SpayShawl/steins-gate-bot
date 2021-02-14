class Random{
    /**
     *
     * @param message {Message}
     * @param args {string[]}
     */
    constructor(message, args){
        this.message = message;
        this.args = args;
        this.action();
    }

    action(){
        if (this.args[0].match(/^[Dd][1-9]/g)){
            const max = parseInt(this.args[0].substr(1));
            this.message.channel.send(this.getMessage(max))
        }
    }

    getMessage(max){
        const randomInt = this.getRandomInt(max);
        return this.message.author.toString() + " `d" + max + "` = (" + randomInt + ") = " + randomInt;
    }

    getRandomInt(max){
        return Math.floor(Math.random() * max) + 1;
    }
}
module.exports = Random;