import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  selectedValue: string = '';

    selectedValue2: string = '';

    date1: any;

    quantities1: number[] = [1, 1, 1];

    quantities2: number[] = [1, 1];

    value3: string = '';

    value4: string = '';

    checked: boolean = true;

    checked2: boolean = true;

    checked3: boolean = true;

    cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];

    selectedCity: string = '';

    selectedAddress: string = 'Jacob Obrechtstraat 5, 1071 KC Amsterdam The Netherlands';

    selectedCard: string = '';

    card1: string = '**** **** **** 1234';

    card2: string = '**** **** **** 1235';

    address1: string = 'Jacob Obrechtstraat 5, 1071 KC Amsterdam The Netherlands';

    address2: string = 'Jacob Obrechtstraat 6, 1071 KC Amsterdam The Netherlands';

    selectedDelivery: string = 'UPS';

    selectedPayment: string = 'Credit Card'

    ccRegex: RegExp = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;

    cc: string | number = '';

    cvc: string | number = '';

    cvcRegex: RegExp = /^[0-9]{3,4}$/;

    exp: string | number = '';

    expRegex: RegExp = /[0-9]{2}\/[0-9]{2}$/;

    block1: string = `
<div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="grid -mr-3 -ml-3">
        <div class="col-12 lg:col-8 p-4">
            <div class="surface-card grid formgrid p-fluid border-round shadow-2 p-4">
                <div class="col-12 mb-4 flex flex-column lg:flex-row align-items-center justify-content-between">
                    <div class="text-900 font-medium text-xl">Contact Information</div>
                    <div class="mt-3 lg:mt-0">
                        <span class="text-600 mr-2">Already hava an account?</span>
                        <a tabindex="0" class="cursor-pointer text-900 hover:text-primary transition-duration-150">Login</a>
                    </div>
                </div>
                <div class="col-12 field">
                    <label for="email2" class="text-900 font-medium mb-3">Email</label>
                    <input id="email2" type="text" class="p-inputtext w-full mb-3">
                    <p-checkbox name="checkbox-1" [(ngModel)]="checked" [binary]="true" label="Email me with news and offers" class="text-900" inputId="id"></p-checkbox>
                </div>
                <p-divider class="w-full px-2 mb-3"></p-divider>
                <div class="col-12 mt-4 lg:mt-0 mb-4">
                    <div class="text-900 font-medium text-xl">Shipping</div>
                </div>
                <div class="col-12 field mb-0">
                    <label for="country2" class="text-900 font-medium mb-3">Country</label>
                    <input id="country2" type="text" class="p-inputtext w-full mb-3">
                </div>
                <div class="col-12 lg:col-6 field mb-0">
                    <label for="name2" class="text-900 font-medium mb-3">Name</label>
                    <input id="name2" type="text" class="p-inputtext w-full mb-3">
                </div>
                <div class="col-12 lg:col-6 field mb-0">
                    <label for="surname2" class="text-900 font-medium mb-3">Surname</label>
                    <input id="surname2" type="text" class="p-inputtext w-full mb-3">
                </div>
                <div class="col-12 field mb-0">
                    <label for="address3" class="text-900 font-medium mb-3">Apartment, Suite, etc.</label>
                    <input id="address3" type="text" class="p-inputtext w-full mb-3">
                </div>
                <div class="col-12 lg:col-6 field mb-0">
                    <label for="pc2" class="text-900 font-medium mb-3">Postal Code</label>
                    <input id="pc2" type="text" class="p-inputtext w-full mb-3">
                </div>
                <div class="col-12 lg:col-6 field mb-0">
                    <label for="city2" class="text-900 font-medium mb-3">City</label>
                    <input id="city2" type="text" class="p-inputtext w-full mb-3">
                </div>
                <div class="col-12 field mb-0">
                    <label for="phone" class="text-900 font-medium mb-3">Phone</label>
                    <input id="phone" type="text" class="p-inputtext w-full mb-3">
                </div>
                <p-divider class="w-full px-2 mb-3"></p-divider>
                <div class="text-900 font-medium text-xl mt-4 lg:mt-0 mb-4 px-2">Shipping Method</div>
                <div class="col-12 flex flex-column lg:flex-row field">
                    <div class="flex justify-content-between p-3 border-round border-1 surface-border w-full mr-3 hover:border-primary cursor-pointer" (click)="selectedValue = 'UPS'" [ngClass]="{'border-primary surface-50': selectedValue === 'UPS'}">
                        <div class="mr-3 lg:mr-0">
                            <div class="text-900 font-bold mb-2">UPS</div>
                            <span class="text-600">Delivery: Tomorrow</span>
                        </div>
                        <div class="flex justify-content-between align-items-center">
                            <span class="text-primary mr-2 font-medium">$9.00</span>
                            <p-radioButton name="ups" value="UPS" [(ngModel)]="selectedValue"></p-radioButton>
                        </div>
                    </div>
                    <div class="flex justify-content-between p-3 mt-3 lg:mt-0 border-round border-1 surface-border w-full hover:border-primary cursor-pointer" (click)="selectedValue = 'FedEx'" [ngClass]="{'border-primary surface-50': selectedValue === 'FedEx'}">
                        <div class="mr-3 lg:mr-0">
                            <div class="text-900 font-bold mb-2">FedEx</div>
                            <span class="text-600">Delivery: Next Week</span>
                        </div>
                        <div class="flex justify-content-between align-items-center">
                            <span class="text-primary mr-2 font-medium">$1.00</span>
                            <p-radioButton name="fedex" value="FedEx" [(ngModel)]="selectedValue"></p-radioButton>
                        </div>
                    </div>
                </div>
                <p-divider class="w-full px-2 mb-3"></p-divider>
                <div class="text-900 font-medium text-xl mt-4 lg:mt-0 mb-4 px-2">Payment</div>
                <div class="col-12 mb-4">
                    <div class="p-3 border-1 border-round-top surface-border" (click)="selectedValue2 = 'paypal'" [ngClass]="{'border-primary surface-50': selectedValue2 === 'paypal'}">
                        <p-radioButton name="paypal" value="paypal" [(ngModel)]="selectedValue2" inputId="paypal"></p-radioButton>
                        <label for="paypal" class="text-900 ml-3">PayPal</label>
                    </div>
                    <div class="p-3 border-x-1 surface-border" (click)="selectedValue2 = 'creditcard'" [ngClass]="{'border-primary surface-50': selectedValue2 === 'creditcard'}">
                        <p-radioButton name="creditCard" value="creditcard" [(ngModel)]="selectedValue2" inputId="creditCard"></p-radioButton>
                        <label for="creditCard" class="text-900 ml-3">Credit Card</label>
                    </div>
                    <div class="p-3 border-1 border-round-bottom surface-border" (click)="selectedValue2 = 'bank'" [ngClass]="{'border-primary surface-50': selectedValue2 === 'bank'}">
                        <p-radioButton name="bank" value="bank" [(ngModel)]="selectedValue2" inputId="bank"></p-radioButton>
                        <label for="bank" class="text-900 ml-3">Online Bank Transfer</label>
                    </div>
                </div>
                <div class="col-12 field mb-4">
                    <form #form1="ngForm" class="relative">
                        <label for="cc" class="text-900 font-medium mb-3 block">Card Number</label>
                        <input id="cc" type="text" name="cc" [(ngModel)]="cc" pInputText [pKeyFilter]="ccRegex" [pValidateOnly]="true" placeholder="1234-1234-1234-1234" style="margin-right: .5em">
                        <p-message styleClass="block absolute w-full z-1" severity="error" text="Not a valid credit card number" [@errorState]="form1.dirty && !form1.valid ? 'visible' : 'hidden'"></p-message>
                    </form>
                </div>
                <div class="col-12 lg:col-6 field mb-4">
                    <form #form2="ngForm" class="relative">
                        <label for="exp" class="text-900 font-medium mb-3 block">Expiry Date</label>
                        <input id="exp" type="text" name="exp" [(ngModel)]="exp" pInputText [pKeyFilter]="expRegex" [pValidateOnly]="true" placeholder="MM/YY" style="margin-right: .5em">
                        <p-message styleClass="block absolute w-full z-1" severity="error" text="Not a valid expiry date" [@errorState]="form2.dirty && !form2.valid ? 'visible' : 'hidden'"></p-message>
                    </form>
                </div>
                <div class="col-12 lg:col-6 field mb-4">
                    <form #form3="ngForm" class="relative">
                        <label for="cvc" class="text-900 font-medium mb-3 block">CVC</label>
                        <input id="cvc" type="text" name="cvc" [(ngModel)]="cvc" pInputText [pKeyFilter]="cvcRegex" [pValidateOnly]="true" placeholder="123" style="margin-right: .5em">
                        <p-message styleClass="block absolute w-full z-1" severity="error" text="Not a valid CVC" [@errorState]="form3.dirty && !form3.valid ? 'visible' : 'hidden'"></p-message>
                    </form>
                </div>
                <div class="col-12 field mb-0">
                    <label for="holderName" class="text-900 font-medium mb-3">Cardholder Name</label>
                    <input id="holderName" type="text" class="p-inputtext w-full mb-3">
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-4 p-4">
            <div class="surface-card border-round shadow-2 p-5">
                <div class="flex justify-content-between align-items-center border-bottom-1 pb-3 surface-border">
                    <span class="text-900 font-medium text-lg lg:text-xl"><i class="pi pi-shopping-cart text-xl mr-2"></i>Your Order (1)</span>
                    <a tabindex="0" class="text-600 font-medium cursor-pointer hover:text-primary">Edit Cart</a>
                </div>
                <div class="flex flex-column lg:flex-row flex-wrap lg:align-items-center py-3 my-3 border-bottom-1 surface-border">
                    <img src="assets/images/blocks/ecommerce/checkoutform/checkoutform-1-1.png" class="w-8rem h-8rem flex-shrink-0 mb-3" />
                    <div class="flex-auto lg:ml-3">
                        <div class="flex align-items-center justify-content-between mb-3">
                            <span class="text-900 font-medium">Product Title</span>
                            <span class="text-900 font-bold">$123.00</span>
                        </div>
                        <div class="text-600 text-sm mb-3">Black | Large</div>
                        <div class="flex flex-auto justify-content-between align-items-center">
                            <p-inputNumber [showButtons]="true" buttonLayout="horizontal" spinnerMode="horizontal" min="0" inputStyleClass="w-2rem text-center py-2 px-1 border-transparent" [(ngModel)]="quantities1[0]"
                            class="border-1 surface-border border-round" decrementButtonClass="p-button-text text-600 hover:text-primary py-1 px-1" incrementButtonClass="p-button-text text-600 hover:text-primary py-1 px-1" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"></p-inputNumber>
                            <button pButton pRipple icon="pi pi-trash" class="text-600 p-button-text p-button-rounded"></button>
                        </div>
                    </div>
                </div>
                <div class="py-2 mt-3 border-bottom-1 surface-border">
                    <div class="flex justify-content-between align-items-center mb-3">
                        <span class="text-900">Subtotal</span>
                        <span class="text-900">$12.00</span>
                    </div>
                    <div class="flex justify-content-between align-items-center mb-3">
                        <span class="text-900">Shipping</span>
                        <span class="text-900">Free</span>
                    </div>
                    <div class="flex justify-content-between align-items-center mb-3">
                        <span class="text-900">Total</span>
                        <span class="text-900 font-bold">$12.00</span>
                    </div>
                </div>
                <div class="py-2 mt-3 border-bottom-1 surface-border">
                    <div class="text-900 font-medium mb-2">Save Your Account</div>
                    <div class="text-600 text-sm line-height-3 mb-2">Create an exclusive account for easy shopping and experience for your upcoming visits.</div>
                    <p-password [(ngModel)]="value3" [toggleMask]="true" styleClass="w-full mb-2" inputStyleClass="w-full"></p-password>
                </div>
                <button pButton class="p-button-primary" label="Place Order" class="w-full mt-3"></button>
            </div>
        </div>
    </div>
</div>`;

    block2: string = `
<div class="surface-section">
    <div class="grid grid-nogutter">
        <div class="col-12 lg:col-6 h-full px-4 py-8 md:px-6 lg:px-8">
            <ul class="flex list-none flex-wrap p-0 mb-6">
                <li class="flex align-items-center text-primary mr-2">Cart <i class="pi pi-chevron-right text-500 text-xs ml-2"></i></li>
                <li class="flex align-items-center text-500 mr-2">Information<i class="pi pi-chevron-right text-500 text-xs ml-2"></i></li>
                <li class="flex align-items-center text-500 mr-2">Shipping<i class="pi pi-chevron-right text-500 text-xs ml-2"></i></li>
                <li class="flex align-items-center text-500 mr-2">Payment</li>
            </ul>
            <div class="grid formgrid">
                <div class="col-12 field mb-6">
                    <span class="text-900 text-2xl block font-medium mb-5">Contact Information</span>
                    <input id="email" placeholder="Email" type="text" class="p-inputtext w-full mb-4">
                    <p-checkbox name="checkbox-1" [(ngModel)]="checked2" [binary]="true" label="Email me with news and offers" class="text-900" inputId="id"></p-checkbox>
                </div>
                <div class="col-12 field mb-4">
                    <span class="text-900 text-2xl block font-medium mb-5">Shipping</span>
                    <p-dropdown [options]="cities" [(ngModel)]="selectedCity" placeholder="Country / Region" optionLabel="name" [showClear]="true" styleClass="w-full"></p-dropdown>
                </div>
                <div class="col-12 lg:col-6 field mb-4">
                    <input id="name" placeholder="Name" type="text" class="p-inputtext w-full">
                </div>
                <div class="col-12 lg:col-6 field mb-4">
                    <input id="lastname" placeholder="Last Name" type="text" class="p-inputtext w-full">
                </div>
                <div class="col-12 field mb-4">
                    <input id="address" placeholder="Address" type="text" class="p-inputtext w-full">
                </div>
                <div class="col-12 field mb-4">
                    <input id="address2" placeholder="Apartment, suite, etc" type="text" class="p-inputtext w-full">
                </div>
                <div class="col-12 lg:col-6 field mb-4">
                    <input id="pc" placeholder="Postal Code" type="text" class="p-inputtext w-full">
                </div>
                <div class="col-12 lg:col-6 field mb-4">
                    <input id="city" placeholder="City" type="text" class="p-inputtext w-full">
                </div>
                <div class="col-12 lg:col-6 field mb-4">
                    <p-checkbox name="checkbox-1" [(ngModel)]="checked3" [binary]="true" label="Save for next purchase" class="text-900" inputId="id"></p-checkbox>
                </div>
                <div class="col-12 flex flex-column lg:flex-row justify-content-center align-items-center lg:justify-content-end mt-6">
                    <button pButton pRipple class="p-button-text mt-3 lg:mt-0 w-full lg:w-auto lg:px-6 flex-order-2 lg:flex-order-1 lg:mr-4" label="Return to Cart"></button>
                    <button pButton pRipple class="p-button-primary w-full lg:w-auto lg:px-6 flex-order-1 lg:flex-order-2" label="Continue to Shipping"></button>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-6 px-4 py-8 md:px-6 lg:px-8 surface-50">
            <div class="border-bottom-1 pb-3 surface-border">
                <span class="text-900 font-medium text-xl">Your Cart</span>
            </div>
            <div class="flex flex-column lg:flex-row flex-wrap lg:align-items-center py-2 mt-3 border-bottom-1 surface-border">
                <img src="assets/images/blocks/ecommerce/checkoutform/checkoutform-1-2.png" class="w-8rem h-8rem flex-shrink-0 mb-3" />
                <div class="flex-auto lg:ml-3">
                    <div class="flex align-items-center justify-content-between mb-3">
                        <span class="text-900 font-medium">Product Name</span>
                        <span class="text-900 font-bold">$123.00</span>
                    </div>
                    <div class="text-600 text-sm mb-3">Black | Large</div>
                    <div class="flex flex-auto justify-content-between align-items-center">
                        <p-inputNumber [showButtons]="true" buttonLayout="horizontal" spinnerMode="horizontal" min="0" inputStyleClass="w-2rem text-center py-2 px-1 border-transparent" [(ngModel)]="quantities1[0]"
                        class="border-1 surface-border border-round" decrementButtonClass="p-button-text text-600 hover:text-primary py-1 px-1" incrementButtonClass="p-button-text text-600 hover:text-primary py-1 px-1" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"></p-inputNumber>
                        <button pButton pRipple icon="pi pi-trash" class="p-button-text p-button-rounded"></button>
                    </div>
                </div>
            </div>
            <div class="py-2 mt-3 border-bottom-1 surface-border">
                <div class="p-inputgroup mb-3">
                    <input type="text" [(ngModel)]="value4" pInputText placeholder="Promo code" class="w-full">
                    <button type="button" pButton pRipple label="Apply" [disabled]="!value4"></button>
                </div>
            </div>
            <div class="py-2 mt-3">
                <div class="flex justify-content-between align-items-center mb-3">
                    <span class="text-900 font-medium">Subtotal</span>
                    <span class="text-900">$123.00</span>
                </div>
                <div class="flex justify-content-between align-items-center mb-3">
                    <span class="text-900 font-medium">Shipping</span>
                    <span class="text-primary font-bold">Free</span>
                </div>
                <div class="flex justify-content-between align-items-center mb-3">
                    <span class="text-900 font-bold">Total</span>
                    <span class="text-900 font-medium text-xl">$123.00</span>
                </div>
            </div>
            <div class="py-2 mt-3 bg-yellow-100 flex align-items-center justify-content-center">
                <img src="assets/images/blocks/ecommerce/checkoutform/checkoutform-1-3.png" class="mr-2" alt="Country Flag"><span class="text-black-alpha-90 font-medium">No additional duties or taxes.</span>
            </div>
        </div>
    </div>
</div>`;

    block3: string = `
<div class="surface-50 px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-medium text-3xl mb-5">Your order is almost done</div>
    <div class="grid -mr-3 -ml-3">
        <div class="col-12 lg:col-9 p-3">
            <div class="px-0 py-4 lg:px-4 surface-card border-round shadow-2">
                <div class="flex">
                    <div class="flex flex-column align-items-center ml-3" style="width:2rem">
                        <span class="bg-green-500 text-0 flex align-items-center justify-content-center border-circle" style="min-width:3rem; min-height: 3rem">
                            <i class="pi pi-directions text-xl"></i>
                        </span>
                        <div class="h-full border-dashed border-1 border-green-500" style="min-height: 12rem"></div>
                    </div>
                    <div class="ml-0 lg:ml-5 p-2 flex-auto">
                        <div class="mb-3">
                            <span class="text-900 text-xl block ml-2">Address</span>
                        </div>
                        <div class="grid flex-column lg:flex-row">
                            <div class="col p-3">
                                <div class="flex flex-column border-round border-1 surface-border p-4 cursor-pointer hover:border-primary transition-duration-150" (click)="selectedAddress = address1" [ngClass]="{'border-primary': selectedAddress === address1}">
                                    <div class="flex justify-content-between mb-3">
                                        <span class="text-900 text-xl font-medium">Home</span>
                                        <span class="text-600 font-medium"><i class="pi pi-pencil mr-2"></i>Edit</span>
                                    </div>
                                    <span class="inline-block text-600 mb-3">Jacob Obrechtstraat 5, 1071 KC Amsterdam The Netherlands</span>
                                    <span class="inline-block text-600"><i class="pi pi-mobile mr-2"></i>+123456789</span>
                                </div>
                            </div>
                            <div class="col p-3">
                                <div class="flex flex-column border-round border-1 surface-border p-4 cursor-pointer hover:border-primary transition-duration-150" (click)="selectedAddress = address2" [ngClass]="{'border-primary': selectedAddress === address2}">
                                    <div class="flex justify-content-between mb-3">
                                        <span class="text-900 text-xl font-medium">Office</span>
                                        <span class="text-600 font-medium"><i class="pi pi-pencil mr-2"></i>Edit</span>
                                    </div>
                                    <span class="inline-block text-600 mb-3">Jacob Obrechtstraat 5, 1072 KC Amsterdam The Netherlands</span>
                                    <span class="inline-block text-600"><i class="pi pi-mobile mr-2"></i>+123456789</span>
                                </div>
                            </div>
                            <div class="col-12 lg:col-3 p-3">
                                <div class="flex h-full flex-column justify-content-center align-items-center py-5 lg:py-0 border-round border-1 surface-border surface-100 cursor-pointer hover:border-primary transition-duration-150">
                                    <span class="text-600 border-circle border-2 w-2rem h-2rem flex align-items-center justify-content-center"><i class="pi pi-fw pi-plus"></i></span>
                                    <span class="text-600 mt-3">Add New Address</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <div class="flex flex-column align-items-center ml-3" style="width:2rem">
                        <span class="bg-green-500 text-0 flex align-items-center justify-content-center border-circle" style="min-width:3rem; min-height: 3rem">
                            <i class="pi pi-image text-xl"></i>
                        </span>
                        <div class="h-full border-dashed border-1 surface-border" style="min-height: 12rem"></div>
                    </div>
                    <div class="ml-0 lg:ml-5 p-2 flex-auto">
                        <div class="mb-3">
                            <span class="text-900 text-xl block ml-2">Cart</span>
                        </div>
                        <div class="p-2 flex flex-column lg:flex-row flex-wrap lg:align-items-center">
                            <img src="assets/images/blocks/ecommerce/checkoutform/checkoutform-1-4.png" class="w-8rem h-8rem mb-3 lg:mb-0 flex-shrink-0" alt="product"/>
                            <div class="flex-auto lg:ml-3">
                                <div class="flex align-items-center justify-content-between mb-3">
                                    <span class="text-900 font-medium">Product Name</span>
                                    <span class="text-900 font-medium">$123.00</span>
                                </div>
                                <div class="text-600 text-sm mb-3">White</div>
                                <div class="flex flex-auto justify-content-between align-items-center">
                                    <p-inputNumber [showButtons]="true" buttonLayout="horizontal" spinnerMode="horizontal" min="0" inputStyleClass="w-2rem text-center p-0 border-none surface-50" [(ngModel)]="quantities1[0]"
                                    class="border-none border-round" decrementButtonClass="surface-50 p-button-text text-600 hover:text-primary" incrementButtonClass="p-button-text surface-50 text-600 hover:text-primary py-1 px-1" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"></p-inputNumber>
                                    <span class="text-600 cursor-pointer"><i class="pi pi-trash mr-2"></i>Delete</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <div class="flex flex-column align-items-center ml-3" style="width:2rem">
                        <span class="bg-gray-200 text-500 flex align-items-center justify-content-center border-circle" style="min-width:3rem; min-height: 3rem">
                            <i class="pi pi-credit-card text-xl"></i>
                        </span>
                    </div>
                    <div class="ml-0 lg:ml-5 p-2 flex-auto">
                        <div class="mb-3">
                            <span class="text-900 text-xl block ml-2">Payment Method</span>
                        </div>
                        <div class="grid flex-column lg:flex-row">
                            <div class="col p-3">
                                <div class="flex flex-column border-round border-1 surface-border p-4 cursor-pointer hover:border-primary transition-duration-150" (click)="selectedCard = card1" [ngClass]="{'border-primary': selectedCard === card1}">
                                    <img src="assets/images/blocks/ecommerce/checkoutform/checkoutform-1-5.png" class="w-6rem" alt="Visa">
                                    <span class="inline-block text-900 text-lg lg:text-xl mt-3">**** **** **** 1234</span>
                                    <div class="flex justify-content-between align-items-center mt-3">
                                        <span class="inline-block text-600 text-sm">Cardholder Name</span>
                                        <span class="inline-block text-600 text-sm text-right">Expiry Date</span>
                                    </div>
                                    <div class="flex justify-content-between align-items-center mt-3">
                                        <span class="inline-block text-900 font-bold">John  Warden</span>
                                        <span class="inline-block text-900 font-bold">12/25</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col p-3">
                                <div class="flex flex-column border-round border-1 surface-border p-4 cursor-pointer hover:border-primary transition-duration-150" (click)="selectedCard = card2" [ngClass]="{'border-primary': selectedCard === card2}">
                                    <img src="assets/images/blocks/ecommerce/checkoutform/checkoutform-1-5.png" class="w-6rem" alt="Visa">
                                    <span class="inline-block text-900 text-lg lg:text-xl mt-3">**** **** **** 1234</span>
                                    <div class="flex justify-content-between align-items-center mt-3">
                                        <span class="inline-block text-600 text-sm">Cardholder Name</span>
                                        <span class="inline-block text-600 text-sm text-right">Expiry Date</span>
                                    </div>
                                    <div class="flex justify-content-between align-items-center mt-3">
                                        <span class="inline-block text-900 font-bold">John  Warden</span>
                                        <span class="inline-block text-900 font-bold">12/25</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 lg:col-3 p-3">
                                <div class="flex h-full flex-column justify-content-center align-items-center py-5 lg:py-0 border-round border-1 surface-border surface-100 cursor-pointer hover:border-primary transition-duration-150">
                                    <span class="text-600 border-circle border-2 w-2rem h-2rem flex align-items-center justify-content-center"><i class="pi pi-fw pi-plus"></i></span>
                                    <span class="text-600 mt-3 text-center">Add New Credit Card</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-3 p-3">
            <div class="surface-card p-4 border-round shadow-2">
                <div class="border-bottom-1 surface-border pb-4">
                    <span class="text-900 text-xl block">Order Summary</span>
                </div>
                <div class="border-bottom-1 surface-border my-3 py-2">
                    <div class="flex justify-content-between mb-3">
                        <span class="text-900">Price</span>
                        <span class="text-900">$123.00</span>
                    </div>
                    <div class="flex justify-content-between mb-3">
                        <span class="text-900">Delivery</span>
                        <span class="text-green-500">Free</span>
                    </div>
                    <div class="flex justify-content-between mb-3">
                        <span class="text-900">Discount</span>
                        <span class="text-900">$12.00</span>
                    </div>
                </div>
                <div class="border-bottom-1 surface-border my-3 py-2">
                    <div class="flex justify-content-between mb-3">
                        <span class="text-900 font-medium">Total</span>
                        <span class="text-900 font-bold">$111.00</span>
                    </div>
                </div>
                <button pButton pRipple class="surface-400 border-none hover:bg-primary w-full mt-3" [disabled]="!selectedCard" label="Place Order"></button>
            </div>
        </div>
    </div>
</div>`;
}
