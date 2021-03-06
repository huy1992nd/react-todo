
const list_group = [1,2,3];
const list_result = ["success", "fail" ];
const list_action = ["register", "buy", "login" , "logout", "read"];
const list_user = ['Peter', 'Marry', "John" , 'Jame', 'laura'];
class MessageController {
    constructor() {
    }

    randomMessage(){
        var list_message = [];
        let Number_message = Math.floor(Math.random()*100);
        for(let i =0 ; i < Number_message ; i++){
             let message = `${list_user[Math.floor(Math.random()*list_user.length)]}  ${list_action[Math.floor(Math.random()*list_action.length)]} ${list_result[Math.floor(Math.random()*list_result.length)]} !`;
             let group = list_group[Math.floor(Math.random()*list_group.length)];
             let time = new Date().getUTCDate()
             list_message.push({
                 message,
                 group,
                 time
             });
        }
        return list_message;
    }

    getMessage(client, group = null) {
        var list_message = this.randomMessage()
        if(group){
            list_message = list_message.filter(m=>m.group === group);
        }
        client.emit('list_message',list_message);
    }
}

module.exports = new MessageController();