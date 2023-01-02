"use strict";

const output = {
    hello: (req,res) => {
        res.render("home/index");
    },
    
    login: (req,res) => {
        res.render("home/login");
    },
}

const users = {
    id: ["이재현","passby","259"],
    psword: ["8468","1234","0000"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
            psword = req.body.psword;
        
        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword) {
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success: false,
            msg: "로그인에 실패하였습니다.",
        });
    }
}

module.exports = {
    output,
    process,
};