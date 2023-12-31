export type BudgetingDictionary = {
    head: {
        title: string;
        titleDetail: string;
    },
    toolbar: {
        date: string;
        addTime: string;
        addExpense: string;
        addInvoice: string;
        serviceEdit: string;
		search: string;
    },
    status: {
        open: string;
        close: string;
    },
    actionStatus: {
        create: string;
		create_service: string;
    },
    tabTime: {
        service: string;
        person: string;
        notes: string;
        time: string;
        billable: string;
    },
    tabExpenses: {
        service: string;
        description: string;
        date: string;
        att: string;
        paymentStatus: string;
        totalCost: string;
        billable: string;
    },
    tabInvoice: {
        subject: string;
        invoiceNumber: string;
        date: string;
        att: string;
        amountNoTax: string;
        amountUnpaid: string;
        dueDate: string
    },
	tabService: {
		index: {
			name: string;
			workingTime: string;
			price: string;
			cost: string;
		},
		section: {
			serviceName: string;
			serviceType: string;
			billingType: string;
			unit: string;
			tracking: string;
			estimate: string;
		}
	},
    dialog: {
        titleModalAdd: string;
        date: string;
        project: string;
        timeRanger: string;
        startTime: string;
        endTime: string;
        note: string;
        cancelBtnText: string;
        addBtnText: string;
        editBtnText: string;
    },
	dialogRecurring: {
		titleModalAdd: string;
		cancelBtnText: string;
        addBtnText: string;
        editBtnText: string;
		recurringInterval: string;
		nextOccurrence: string;
		stopRecurring: string;
	},
	delete: {
		titleConfirmDelete: string;
		contentConfirmDelete: string;
	}
}
