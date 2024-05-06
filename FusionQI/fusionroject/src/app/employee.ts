export class Employee {
    
 
    fullname!:String;
    last_name!:String;
    email!:String;
    phone!:number;
    applying_for!:String
    time_submission!:Date;
  currentStep!:number;
  completedSteps!:number;
  
  
  
  
  
    first_name!:String;
    Last_name!:String;
    Email!:String;
    Phone!:Number;
    Applying_for!:String
    Time_submission!:Date;
  
  
      id!: number;
      firstName!: string;
      middleName!:string;
      lastName!:string;
      gender!: String; 
      dateOfBirth!:string;
      personalEmail!:string;
      mobile!:number;
      jobStatus!: String; 
   skills!: String;
      currentAddressLine!:string;
      currentCity!:string;
      currentPincode!:number;
      currentState!:string;
   
      permanentAddressLine!:string;
      permanentCity!:string;
      permanentPincode!:number;
      permanentState!:string;
       
      postGraduationCollege!:string;
      postGraduationBranch!:string;
      postGraduationCGPA!:number;
      postGraduationYearOfCompletion!:number;
     
      graduationCollege!:string;
      graduationBranch!:string;
      graduationCGPA! : number;
      graduationYearOfCompletion!:number;
   
      intermediateCollege!:string;
      intermediateBranch!:string;
      intermediateCGPA!:number;
      intermediateYearOfCompletion!:number;
   
      ssc!:string;
      sscBranch!:string;
      sscCGPA!:number;
      sscYearOfCompletion!:number;
        workEmail: any;
    location: any;
    jobTitle: any;
    name: any;
   
   
   
   
   
      // intermediateBranchP!:string
      // intermediateCGPA!:number;
      // intermediateYearOfCompletion!:number;
   
      // sscBranch!:string;
      // sscCGPA!:number;
      // sscYearOfCompletion!:number
     
  
      Fullname!: String;
      // id!:number;
      //   firstName!:string;
      //   lastName:string;
        message!:String;
        category!:String;
         dateTime!:String;
  
  
        
  
         
   
  }
  
  // export interface Employee{
  //     Fullname: String;
  //     Email: String;
  //     Phone:number;
  //     Applying_for:String;
  //     id:number;
  //       firstName:string;
  //       lastName:string;
  //       email:String;
  //       message:String;
  //       category:String;
  //     Time_submission: Date ;
  // }

  export interface candidate{
    completedSteps:number;
    currentStep:number;
  }
  export class candidate{
    completedSteps!:number;
    currentStep!:number;
  }
  export class employee{
    completedSteps!:number;
    currentStep!:number;
  }