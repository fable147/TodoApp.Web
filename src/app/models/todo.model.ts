export interface Todo
{
    Id: string,
    Description: string,
    Title: string,
    IsCompleted:boolean
    CreatedDate:Date,
    UpdatedDate:Date,
    ComplatedDate:Date,
    EmergencyLevel:EmergencyLevel;
    Category:string

}
export interface EmergencyLevel
{
    level:string,
    code:number,
}
