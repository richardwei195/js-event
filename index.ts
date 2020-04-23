export const Event = () => {
  this.on = (eventName: string, cb: () => {}) => {
      if(!this.handles){
          this.handles={};
      }
      if(!this.handles[eventName]){
          this.handles[eventName]=[];
      }
      this.handles[eventName].push(cb);
  }

  this.emit = (eventName: string, params: any) => {
    if(this.handles[eventName]){
      for (const func of this.handles[eventName]) {
        func(params)
      }
    }
  }
  return this;
}