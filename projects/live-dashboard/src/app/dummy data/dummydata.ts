
import { Entity } from './../model/entity';


export const datas: any[] = [
    {id:0, name: ' ffffsss', data3:'rrrrr',data4:"ffffff",data5:"anfdgdfhh"},
    {id:1, name: 'dddd', data3:'rrrrr',data4:"ffffff",data5:"anfdgdfhh"},
    {id:2, name: 'data 3 ', data3:'rrrrr',data4:"ffffff",data5:"anfdgdfhh"},
 

  ];
  export const data2: any[] = [
    {id:0, name: 'data 1', data2:'rrrrr',data3:"ffffff"},
    {id:1, name: 'data 2', data2:'rrrrr',data3:"ffffff"},
    {id:2, name: 'data 3 ', data2:'rrrrr',data3:"ffffff"},
    {id:3, name: 'data 4 ', data2:'rrrrr',data3:"ffffff"},

  ];

  
  export const columns3: String []=[ 'name' ];
  export const columns1: String []=['id', 'name' ,'data3','data4','data5','action'];
  export const columns2: String []=['id', 'name' ,'data2','data3','action'];
export const entities: Entity[] = [
    {id:0, name: 'Entity 1',columns:columns1 , data:datas },
  {id:1, name: 'Entity 2',columns:columns2 ,data:data2},


 
  ];