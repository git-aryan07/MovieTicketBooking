export const timeFormat=(minutes)=>{

    const hours=Math.floor(minutes/60 );

    const minutesremainder=minutes%60;

    return `${hours}h ${minutesremainder}m`;
}