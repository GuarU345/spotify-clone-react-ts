const currentDate = new Date()
const currentHour = currentDate.getHours()

export const Greetings = () => {
    let greeting = ""

    if (currentHour < 12) {
        greeting = "Buenos días"
    } else if (currentHour < 18) {
        greeting = "Buenas Tardes"
    } else {
        greeting = "Buenas noches"
    }

    return (
        <p className="text-2xl">{greeting}</p>
    )
}
