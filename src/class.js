function Bus(){
    this.front = 80
    this.back = 90
    this.totalWheels = function(){
        return this.back + this.front;

    }
    this.getColor= function(){
        return "green"
    }
}
export default Bus;