import moment from "moment";

export function getFormatedDate(date) {
    if(!date){
     return 'NA'
    }
     let formatedDateTime = moment(date).format("MMMM D,YYYY");
     return formatedDateTime;
}