import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
    AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors,
    Validators
} from "@angular/forms";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: "app-admin",
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterOutlet],
    templateUrl: "./admin.component.html",
    styleUrl: "./admin.component.scss"
})
export class AdminComponent implements OnInit {
    adminForm: FormGroup = new FormGroup({});

    constructor(private formBuilder: FormBuilder) {
        this.adminForm = this.formBuilder.group({
            title: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
            description: ["", [Validators.maxLength(500)]],
            imageLink: ["", [Validators.required]],
            videoLink: ["", [Validators.required]],
            creationDate: ["", [Validators.required]],
            tags: this.formBuilder.array([], Validators.maxLength(5))
        });
    }

    ngOnInit(): void {
        this.adminForm = this.formBuilder.group({
            title: ["", [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(20)
            ]],
            description: ["", [
                Validators.maxLength(255)
            ]],
            imageLink: ["", [
                Validators.required
            ]],
            videoLink: ["", [
                Validators.required
            ]],
            creationDate: ["", [
                Validators.required,
                AdminComponent.dateNotInFutureValidator
            ]],
            tags: this.formBuilder.array([
                this.createTagFormGroup()
            ])
        });
    }

    static dateNotInFutureValidator(control: AbstractControl): ValidationErrors | null {
        const selectedDate = new Date(control.value);
        const today = new Date();
        if (selectedDate > today) {
            return { dateInFuture: true };
        }
        return null;
    }

    get f() { return this.adminForm.controls; }
    get tagControls() { return (this.adminForm.get("tags") as FormArray).controls; }

    createTagFormGroup(): FormGroup {
        return this.formBuilder.group({
            tag: ["", Validators.required]
        });
    }

    addTag() {
        const tags = this.adminForm.get("tags") as FormArray;
        tags.push(this.formBuilder.group({
            tag: ["", Validators.required]
        }));
    }

    removeTag(index: number) {
        const tags = this.adminForm.get("tags") as FormArray;
        tags.removeAt(index);
    }

    onSubmit() {
        if (this.adminForm.valid) {
            this.adminForm.markAllAsTouched();
        }
    }

    resetForm() {
        this.adminForm.reset({
            title: "",
            description: "",
            imageLink: "",
            videoLink: "",
            creationDate: "",
            tags: [this.createTagFormGroup()]
        });
    }
}
