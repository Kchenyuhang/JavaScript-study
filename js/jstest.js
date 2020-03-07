// var temp = "hello"
// console.log(temp)
// if(true) {
//     let temp = "world"
//     console.log(temp)
// }
// let temp = "AAA"   //报错——SyntaxError: Identifier 'temp' has already been declared  标识符“temp”已经被声明
// console.log(temp)

// let temp = "hello"
// console.log(temp)
// if(true) {
//     let temp = "world"
//     console.log(temp)
// }
// let temp = "AAA"   //报错——SyntaxError: Identifier 'temp' has already been declared  标识符“temp”已经被声明
// console.log(temp)

// const str = "hello"
// if(true) {
//     str = "world"
//     console.log(str)
//     //报错——TypeError: Assignment to constant variable.  赋值给常量变量
// }

// class Student {
//     message(name,age,gender) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
// }

// let student1 = new Student();
// student1.name = "Archer"
// student1.age = 20
// student1.gender = "男"
// console.log(student1)
// console.log(JSON.stringify(student1)) //序列化

// let students = [new Student('a',1,'男'),new Student('b',2,'女')]
// for(let stu of students) {
//     console.log(stu)
// }

// for(let index = 0; index < students.length; index++) {

// }

// 可对任意深度的嵌套数组进行解析
// var arr = [123,[[456],789]]
// let [a,[[b],c]] = [123,[[456],789]]
// console.log(arr)
// console.log(a)
// console.log(b)
// console.log(c)

// 不需要匹配的位置可以空置
// [ , ,third] = [1,2,3]
// console.log(third)

// 使用...扩展运算符，匹配余下的所有值，形成一个数组
// var [head,...body] = [1,2,3,4]
// console.log(body)