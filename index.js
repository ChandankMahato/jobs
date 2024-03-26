function calculateRating() {
    const jobTitle = document.getElementById('jobTitle').value.trim();
    const companyName = document.getElementById('companyName').value.trim();
    const locationChecked = document.querySelector('input[name="location"]:checked');
    const companyProfileChecked = document.querySelector('input[name="companyProfile"]:checked');
    const salaryChecked = document.querySelector('input[name="salary"]:checked');
    const workingHoursChecked = document.querySelector('input[name="workingHours"]:checked');
    const certificationChecked = document.querySelector('input[name="certification"]:checked');
    const learningEnvironmentChecked = document.querySelector('input[name="learningEnvironment"]:checked');
    const perksChecked = document.querySelector('input[name="perks"]:checked');

    if (!jobTitle) {
        alert('Job Title is not selected.');
        return;
    }

    if (!companyName) {
        alert('Company Name is not selected.');
        return;
    }

    if (!locationChecked) {
        alert('Location is not selected.');
        return;
    }

    if (!companyProfileChecked) {
        alert('Company Profile & Office is not selected.');
        return;
    }

    if (!salaryChecked) {
        alert('Salary is not selected.');
        return;
    }

    if (!workingHoursChecked) {
        alert('Working Hours and Days is not selected.');
        return;
    }

    if (!certificationChecked) {
        alert('Certification is not selected.');
        return;
    }

    if (!learningEnvironmentChecked) {
        alert('Learning Environment is not selected.');
        return;
    }

    if (!perksChecked) {
        alert('Perks is not selected.');
        return;
    }

    const locationPriority = parseInt(document.getElementById('locationPriority').value);
    if (!locationPriority) {
        alert('Location Priority is not selected.');
        return;
    }

    const companyProfilePriority = parseInt(document.getElementById('companyProfilePriority').value);
    if (!companyProfilePriority) {
        alert('Company Profile & Office Priority is not selected.');
        return;
    }

    const salaryPriority = parseInt(document.getElementById('salaryPriority').value);
    if (!salaryPriority) {
        alert('Salary Priority is not selected.');
        return;
    }

    const workingHoursPriority = parseInt(document.getElementById('workingHoursPriority').value);
    if (!workingHoursPriority) {
        alert('Working Hours and Days Priority is not selected.');
        return;
    }

    const certificationPriority = parseInt(document.getElementById('certificationPriority').value);
    if (!certificationPriority) {
        alert('Certification Priority is not selected.');
        return;
    }

    const learningEnvironmentPriority = parseInt(document.getElementById('learningEnvironmentPriority').value);
    if (!learningEnvironmentPriority) {
        alert('Learning Environment Priority is not selected.');
        return;
    }

    const perksPriority = parseInt(document.getElementById('perksPriority').value);
    if (!perksPriority) {
        alert('Perks Priority is not selected.');
        return;
    }


    const locationRating = parseInt(locationChecked.getAttribute('data-rating'));
    const companyProfileRating = parseInt(companyProfileChecked.getAttribute('data-rating'));
    const salaryRating = parseInt(salaryChecked.getAttribute('data-rating'));
    const workingHoursRating = parseInt(workingHoursChecked.getAttribute('data-rating'));
    const certificationRating = parseInt(certificationChecked.getAttribute('data-rating'));
    const learningEnvironmentRating = parseInt(learningEnvironmentChecked.getAttribute('data-rating'));
    const perksRating = parseInt(perksChecked.getAttribute('data-rating'));

    // Reverse priority values when parameter value is 10 (low)
    const reversedLocationPriority = locationPriority === 10 ? 100 : locationPriority;
    const reversedCompanyProfilePriority = companyProfilePriority === 10 ? 100 : companyProfilePriority;
    const reversedSalaryPriority = salaryPriority === 10 ? 100 : salaryPriority;
    const reversedWorkingHoursPriority = workingHoursPriority === 10 ? 100 : workingHoursPriority;
    const reversedCertificationPriority = certificationPriority === 10 ? 100 : certificationPriority;
    const reversedLearningEnvironmentPriority = learningEnvironmentPriority === 10 ? 100 : learningEnvironmentPriority;
    const reversedPerksPriority = perksPriority === 10 ? 100 : perksPriority;

    const rating = (locationRating * reversedLocationPriority +
                    companyProfileRating * reversedCompanyProfilePriority +
                    salaryRating * reversedSalaryPriority +
                    workingHoursRating * reversedWorkingHoursPriority +
                    certificationRating * reversedCertificationPriority +
                    learningEnvironmentRating * reversedLearningEnvironmentPriority +
                    perksRating * reversedPerksPriority) / 700;

    const ratingResult = document.getElementById('ratingResult');
    ratingResult.innerHTML = `<p>Based on your selection, the rating for "${jobTitle}" at "${companyName}" is ${rating}.</p>`;

    let templateString = `You Should `;
    if (rating >= 70) {
        templateString += `definitely join this job as it meets most of my preferences.`;
    } else if (rating >= 40) {
        templateString += `consider joining this job, but You should discuss some aspects further.`;
    } else {
        templateString += `not join this job as it doesn't meet my preferences.`;
    }
    ratingResult.innerHTML += `<p>${templateString}</p>`;
}
