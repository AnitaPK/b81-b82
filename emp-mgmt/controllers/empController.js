const emp = [
    {
        id: 1,
        name: "Rahul Sharma",
        email: "rahul.sharma@example.com",
        address: "Pune, Maharashtra",
        contactNumber: "9876543210",
        dateOfBirth: "1998-04-12",
        joiningDate: "2023-01-15",
        department: "IT"
    },
    {
        id: 2,
        name: "Sneha Patil",
        email: "sneha.patil@example.com",
        address: "Mumbai, Maharashtra",
        contactNumber: "9823456712",
        dateOfBirth: "1996-09-25",
        joiningDate: "2022-07-20",
        department: "HR"
    },
    {
        id: 3,
        name: "Amit Verma",
        email: "amit.verma@example.com",
        address: "Nagpur, Maharashtra",
        contactNumber: "9988776655",
        dateOfBirth: "1995-12-05",
        joiningDate: "2021-11-10",
        department: "Finance"
    },
    {
        id: 4,
        name: "Priya Kulkarni",
        email: "priya.kulkarni@example.com",
        address: "Nashik, Maharashtra",
        contactNumber: "9765432109",
        dateOfBirth: "1999-06-18",
        joiningDate: "2024-02-01",
        department: "Marketing"
    },
    {
        id: 5,
        name: "Karan Mehta",
        email: "karan.mehta@example.com",
        address: "Aurangabad, Maharashtra",
        contactNumber: "9012345678",
        dateOfBirth: "1997-03-30",
        joiningDate: "2020-08-14",
        department: "Sales"
    }
];

const getAllEmp = (req, res) => {
    try {

        res.status(200).send({ employyes: emp })
    } catch (error) {
        res.status(500).send({ msg: "Seever error" })
    }
}

function createEmp(req, res) {
    try {
        const { name, email, address, contactNumber,
            dateOfBirth, joiningDate, department } = req.body

        const newEmp = {
            id: Date.now(),
            name: name,
            email: email,
            address: address,
            contactNumber: contactNumber,
            dateOfBirth: dateOfBirth,
            joiningDate: joiningDate,
            department: department
        }
        emp.push(newEmp)
        res.status(200).send({ msg: "Emp added successfuly" })

    } catch (error) {
        res.status(500).send({ msg: "Server error" })
    }
}

function deleteEmp(req, res) {
    const { ID } = req.params;

    try {
        const index = emp.findIndex((e) => e.id == ID)
        if (index == -1) {
            res.status(400).send({ msg: "Employee not found" })
        }
        emp.splice(index, 1)
        res.status(200).send({ msg: "emp deletede successfully" })
    } catch (error) {
        res.status(500).send({ msg: "Server error" })
    }
}

const updateEmp = (req, res) => {
    const { ID } = req.params;
    const { address } = req.body
    try {
        const index = emp.findIndex((e) => e.id == ID)
        console.log(index)
        if (index == -1) {
            res.status(400).send({ msg: "Employee not found" })
        }
        emp[index].address = address

        res.status(200).send({ msg: "emp updated successfully" })

    } catch (error) {
        res.status(500).send({ msg: "Server error" })
    }
}

module.exports = {
    getAllEmp,
    createEmp,
    deleteEmp,
    updateEmp
}