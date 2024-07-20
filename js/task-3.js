const profile = {
    username: "Jacob",
    playTime: 300,
    
    changeUsername(newName) {
        this.username = newName;
    },

    updatePlayTime(hours) {
        this.playTime += hours
    },

    getInfo() {
        console.log(`${this.username} has ${this.playTime} active hours!`)
    }
}


profile.changeUsername("Marco");
profile.updatePlayTime(20);
profile.getInfo();
