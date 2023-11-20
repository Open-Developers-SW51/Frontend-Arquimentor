import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from '../../services/payment.service';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
    @Input() id: string = '';
    @Input() name: string = '';
    @Input() description: string = '';
    @Input() price: number = 0;

    constructor(
        public dialogRef: MatDialogRef<ModalComponent>,
        private paymentService: PaymentService,
        private toastrService: ToastrService
    ) {}

    ngOnInit() {}

    confirm(id: string): void {

        this.paymentService.confirm(id).subscribe(
            data => {


                this.dialogRef.close();
                Swal.fire('¡Success!', 'Payment confirmed successfully', 'success');
            },
            err => {

                this.dialogRef.close();
                Swal.fire('Error', 'There was an error confirming the payment', 'error');
            }
        );
    }

    cancel(id: string): void {
        this.paymentService.cancel(id).subscribe(
            data => {

                this.dialogRef.close();
                Swal.fire('¡Success!', 'Payment successfully canceled', 'success');
            },
            err => {

                this.dialogRef.close();
                Swal.fire('Error', 'There was an error canceling the payment', 'error');
            }
        );
    }

    closeModal(): void {
        this.dialogRef.close();
    }


}
