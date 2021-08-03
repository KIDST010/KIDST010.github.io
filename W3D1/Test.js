// testing

let savingAccount = new SavingAccount(1,2);
savingAccount._balance = 100; 

describe("getInterest(), SavingAccount",()=>{
    it("should fetch the interest of the saving account",()=>{
        assert.deepEqual(savingAccount.getInterest(),2);
    });
});

describe("setInterest(value), SavingAccount",()=>{
    it("should throw RangeError if the value passed is less than zero",()=>{
        assert.throw(() => {
            savingAccount.setInterest(-10) 
        }, RangeError);
    });
    it("should set new value to property 'interest' if the value is greater than zero.",()=>{
        assert.deepEqual(savingAccount.setInterest(2),undefined); 
    });
});

describe("addInterest(), SavingAccount",()=>{
    it("should return a balance after adding the interest",()=>{
        assert.deepEqual(savingAccount.addInterest(),102);
    });
});

describe("toString(), SavingAccount",()=>{
    it("should display the string representation of the SavingAccount",()=>{
        assert.deepEqual(savingAccount.toString(),"Account " + "1" + ": balance " + 102);
    });
});
describe("endOfMonth(), SavingAccount",()=>{
    it("should display Saving Account Statements at the end of a month",()=>{
        assert.deepEqual(savingAccount.endOfMonth(),"Interest added SavingsAccount "+   "1" + ": balance: " + "104.04" + "  interest: " + "2");
        
    });
});


/* checkingAccount */
let checkingAccount = new CheckingAccount(2,100);

describe("getOverDraft(), CheckingAccount",()=>{
    it("should fetch the overdraft limit of the checking account",()=>{
        assert.deepEqual(checkingAccount.getOverDraft(),100);
    });
});

describe("setOverDraft(value), CheckingAccount",()=>{
    it("should throw RangeError if the value passed is less than zero",()=>{
        assert.throw(() => {
            checkingAccount.setOverDraft(-100) 
        }, RangeError);
    });
    it("should set new value to property 'overDraftLimit' if the value is greater than zero.",()=>{
        assert.deepEqual(checkingAccount.setOverDraft(100),undefined); 
    });
});

describe("withdraw(value), CheckingAccount",()=>{
    it("should throw RangeError if the value passed is less than zero",()=>{
        assert.throw(() => {
            checkingAccount.withdraw(-400) 
        }, RangeError);
    });    
    it("should throw RangeError if the person attempts to withdraw beyond the allowed overdraft limit",()=>{
        assert.throw(() => {
            checkingAccount.withdraw(-200) 
        }, RangeError);
    });
    it("should set new value to property 'overDraftLimit' if the value is greater than zero.",()=>{
        assert.deepEqual(checkingAccount.withdraw(100),undefined); 
    });
});

describe("toString(), CheckingAccount",()=>{
    it("should display the string representation of the CheckingAccount",()=>{
        assert.deepEqual(checkingAccount.toString(),"Account " + "2" + ": balance " + "-100");
    });
    
});
describe("endOfMonth(), CheckingAccount",()=>{
    it("should display Checking Account statements at the end of a month",()=>{
        assert.deepEqual(checkingAccount.endOfMonth(),"Warning, low balance CheckingAccount " + "2" + " : balance: " + "-100" + " overdraft limit: " + "100");
    });
   
});


// Bank
let bank = new Bank();

describe("addAccount(), Bank",()=>{
    it("should create an instance of Account, add it to array property in Bank, and return nextNumber",()=>{
        assert.deepEqual(bank.addAccount(),2); 
    });
});

describe("addSavingAccount(), Bank",()=>{
    it("should create an instance of Saving Account, add it to array property in Bank, and return nextNumber",()=>{
        assert.deepEqual(bank.addSavingsAccount(14.5),3); 
    });
});

describe("addCheckingAccount(), Bank",()=>{
    it("should create an instance of Checking Account, add it to array property in Bank, and return nextNumber",()=>{
        assert.deepEqual(bank.addCheckingAccount(100),4); 
    });
});

describe("closeAccount(), Bank",()=>{
    it("should close an Account of any time",()=>{
        assert.deepEqual(bank.closeAccount(2),3); 
    });
});

describe("accountReport(), Bank",()=>{
    it("should report details all accounts",()=>{
        assert.deepEqual(bank.accountReport(3),undefined); 
    });
});

describe("endOfMonth(), Bank",()=>{
    it("should display statements of all Accounts at the end of a month",()=>{
        assert.deepEqual(bank.endOfMonth(),undefined);
    });
});