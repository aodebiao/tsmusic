
export function formatCount(count:number):string|number{
    if (count > 100_000){
        return Math.floor(count / 10_000) + '万'
    }else {
        return count
    }
}


// 不传高度时，高度默认等于宽度

export function getImageUrlSize(imageUrl:string,width:number,height:number = width):string{
    return imageUrl + `?param=${width}x${height} `
}
