import axios from 'axios';


const BAST_URL='http://localhost:8000'

export function getData (){
  const url=`${BAST_URL}/api/drivers`
  return axios.get(url).then(response => response.data);
};

export function deleteItem(id) {
  const url=`${BAST_URL}/api/drivers/${id}`
  return axios.delete(url).then(response => response.data);
}

export function putItem(id,first_name,last_name,age) {
  const url=`${BAST_URL}/api/drivers/${id}`
  return axios.put(url,{first_name:first_name,last_name:last_name,age:age})
   .then(response => response.data)
   .catch(function(err){
     return  err.response.data.message
   });
}
