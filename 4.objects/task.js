function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
	this.subject = null;
	this.excluded = null;

};

Student.prototype.setSubject = function(subjectName) {
	if (this.excluded === null) {
		this.subject = subjectName;
	}
};

Student.prototype.addMarks = function(...marks) {
	if (this.excluded === null) {
		this.marks.push(...marks);
	}
};

Student.prototype.getAverage = function() {
	if (!this.marks || this.marks.length === 0) {
		return 0;
	}
	const total = this.marks.reduce((sum, mark) => sum + mark, 0);
	return total / this.marks.length;
};

Student.prototype.exclude = function(reason) {
	this.excluded = reason;
	this.subject = undefined;
	this.marks = undefined;
};
