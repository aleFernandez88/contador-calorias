
type CaloriesDisplayProps = {
    text: string,
    calories: number,
    bg: string

}
export const CaloriesDisplay = ({ text, calories, bg }: CaloriesDisplayProps) => {
    return (
        <>
            <div className={`flex flex-col justify-center w-30 h-30 rounded-full bg-${bg}`}>
                <h3 className="  text-gray-50 text-5xl font-normal text-center">{calories}</h3>
                <p className=" text-gray-50 text-2xs font-semibold text-center">{text}</p>
            </div>
        </>
    )
}
