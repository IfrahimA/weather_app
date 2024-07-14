export const dropdown = () => 
{
    const activeCity = document.querySelector('.active');
    const inactiveCities = document.querySelectorAll('.inactive'); 
    activeCity.addEventListener('click', () => 
    {
        inactiveCities.forEach((city) => 
        {
            city.classList.toggle('inactive'); 
        })
    })
}