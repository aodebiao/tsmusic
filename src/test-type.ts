
interface IFnCall{
    <TWhy>(fn:()=>TWhy,age:number):TWhy
}

const foo:IFnCall = function(fn,age){

    return fn()
}

foo<string>(()=>{
    return "aa"
},18)



// 不传类型，会进行类型推断
foo(()=>{
    return "aa"
},18)

export {}
