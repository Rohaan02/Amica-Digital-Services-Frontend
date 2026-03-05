import React, { useState, useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import QualifiedScreen from "../components/QualifiedScreen";
import SemiQualifiedScreen from "../components/SemiQualifiedScreen";
import NotQualifiedScreen from "../components/NotQualifiedScreen";
import { calculateFitScore, getQualificationStatus } from "../utils/scoring"; // Import scoring utilities

const IntakeForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [fitScore, setFitScore] = useState(0);
  const [qualificationStatus, setQualificationStatus] = useState(null);
  const [validationSchema, setValidationSchema] = useState(
    "step1ValidationSchema"
  );
  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  // Create a ref for the form container to scroll to top
  const formContainerRef = useRef(null);

  // Helper function to scroll to top of form
  const scrollToFormTop = () => {
    if (formContainerRef.current) {
      formContainerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // Fallback to window scroll
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // Scroll to top when step changes
  useEffect(() => {
    scrollToFormTop();
  }, [currentStep]);

  // Validation schemas for each step (keep your existing schemas)
  const step1ValidationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    companyName: Yup.string().required("Company name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    country: Yup.string().required("Country is required"),
    role: Yup.string().required("Role is required"),
    decisionMaker: Yup.string().required("Please select an option"),
    decisionMakerDetails: Yup.string().when("decisionMaker", {
      is: "no",
      then: () => Yup.string().required("Decision maker details are required"),
      otherwise: () => Yup.string().notRequired(),
    }),
  });

  const step2ValidationSchema = Yup.object({
    goals: Yup.array()
      .min(1, "Please select at least one goal")
      .max(2, "You can select up to 2 goals"),
    servicesInterested: Yup.array().min(
      1,
      "Please select at least one service"
    ),
  });

  const step3ValidationSchema = Yup.object({
    hasWebsite: Yup.string().required("Please select an option"),
    runsPaidAds: Yup.string().required("Please select an option"),
    crm: Yup.string().required("Please select an option"),
    enquiryChannels: Yup.array().min(1, "Please select at least one channel"),
    responseTime: Yup.string().required("Please select response time"),
    biggestIssue: Yup.string().required("Please select your biggest issue"),
  });

  // Helper to check which services are selected
  const getNeedsWebsiteQuestions = (services) => {
    return services?.includes("websites") || false;
  };

  const getNeedsAIQuestions = (services) => {
    return services?.includes("ai-assistant") || false;
  };

  const getNeedsAutomationQuestions = (services) => {
    return services?.includes("ai-automation") || false;
  };

  // Create step4 validation schema dynamically based on current values
  const createStep4ValidationSchema = (services) => {
    const needsWebsite = getNeedsWebsiteQuestions(services);
    const needsAI = getNeedsAIQuestions(services);
    const needsAutomation = getNeedsAutomationQuestions(services);

    return Yup.object({
      // Conditional validation for website questions
      websiteNeeds: Yup.string().when({
        is: () => needsWebsite,
        then: () => Yup.string().required("Please select what you need built"),
        otherwise: () => Yup.string().notRequired(),
      }),
      contentReady: Yup.string().when({
        is: () => needsWebsite,
        then: () => Yup.string().required("Please select content readiness"),
        otherwise: () => Yup.string().notRequired(),
      }),
      // Conditional validation for AI questions
      aiLocation: Yup.string().when({
        is: () => needsAI,
        then: () =>
          Yup.string().required("Please select AI assistant location"),
        otherwise: () => Yup.string().notRequired(),
      }),
      aiTasks: Yup.array().when({
        is: () => needsAI,
        then: () => Yup.array().min(1, "Please select at least one task"),
        otherwise: () => Yup.array().notRequired(),
      }),
      aiLanguages: Yup.string().when({
        is: () => needsAI,
        then: () => Yup.string().required("Please select languages required"),
        otherwise: () => Yup.string().notRequired(),
      }),
      // Conditional validation for automation questions
      automationTasks: Yup.array().when({
        is: () => needsAutomation,
        then: () =>
          Yup.array().min(1, "Please select at least one automation task"),
        otherwise: () => Yup.array().notRequired(),
      }),
      communicationChannel: Yup.string().when({
        is: () => needsAutomation,
        then: () =>
          Yup.string().required("Please select communication channel"),
        otherwise: () => Yup.string().notRequired(),
      }),
    });
  };

  const step5ValidationSchema = Yup.object({
    startTimeline: Yup.string().required(
      "Please select when you want to start"
    ),
    monthlyBudget: Yup.string().required("Please select monthly budget"),
    setupBudget: Yup.string().required("Please select setup budget"),
    regulated: Yup.string().required("Please select industry type"),
    consentContact: Yup.boolean().oneOf(
      [true],
      "You must agree to be contacted"
    ),
  });

  // Formik hook
  const formik = useFormik({
    initialValues: {
      // Screen 1
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      country: "",
      website: "",
      role: "",
      decisionMaker: "",
      decisionMakerDetails: "",

      // Screen 2
      goals: [],
      servicesInterested: [],

      // Screen 3
      hasWebsite: "",
      hasDomain: "",
      runsPaidAds: "",
      adSpend: "",
      crm: "",
      crmOther: "",
      enquiryChannels: [],
      responseTime: "",
      biggestIssue: "",

      // Screen 4 - Dynamic based on services
      websiteNeeds: "",
      integrations: [],
      contentReady: "",
      aiLocation: "",
      aiTasks: [],
      aiLanguages: "",
      automationTasks: [],
      communicationChannel: "",

      // Screen 5
      startTimeline: "",
      monthlyBudget: "",
      setupBudget: "",
      regulated: "",
      consentContact: false,
      consentMarketing: false,
    },
    validationSchema: validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: false,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        // Calculate final score before submission
        const finalScore = calculateFitScore(values);
        setFitScore(finalScore);

        // Determine qualification status
        const status = getQualificationStatus(finalScore);
        setQualificationStatus(status);

        // 1. First API call - Submit form data
        const formResponse = await fetch(
          "http://localhost:5000/api/send-email",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...values,
              fitScore: finalScore,
              qualificationStatus: status,
            }),
          }
        );

        const formData = await formResponse.json();

        if (formData.success) {
          console.log(`✅ Form submitted. Lead ID: ${formData.leadId}`);

          // 2. Second API call - Send qualification email based on status
          if (status === "qualified") {
            const qualifiedResponse = await fetch(
              "http://localhost:5000/api/send-qualified-email",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: values.email,
                  fullName: values.fullName,
                  leadId: formData.leadId,
                }),
              }
            );

            const qualifiedData = await qualifiedResponse.json();
            if (qualifiedData.success) {
              console.log("✅ Qualified email sent successfully");
            }
          } else if (status === "semi-qualified") {
            const semiResponse = await fetch(
              "http://localhost:5000/api/send-semiqualified-email",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: values.email,
                  fullName: values.fullName,
                  leadId: formData.leadId,
                }),
              }
            );

            const semiData = await semiResponse.json();
            if (semiData.success) {
              console.log("✅ Semi-qualified email sent successfully");
            }
          }

          // Store the first name for the success message
          const firstName = values.fullName
            ? values.fullName.split(" ")[0]
            : "there";
          setSubmittedName(firstName);
          setIsSubmitted(true);

          // Scroll to top of the page
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          alert("Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Server error. Please try again later.");
      }
    },
  });

  // Check which services require Screen 4
  const needsWebsiteQuestions = getNeedsWebsiteQuestions(
    formik.values.servicesInterested
  );
  const needsAIQuestions = getNeedsAIQuestions(
    formik.values.servicesInterested
  );
  const needsAutomationQuestions = getNeedsAutomationQuestions(
    formik.values.servicesInterested
  );

  // Update validation schema when step changes or service selections change
  useEffect(() => {
    let newSchema;
    switch (currentStep) {
      case 1:
        newSchema = step1ValidationSchema;
        break;
      case 2:
        newSchema = step2ValidationSchema;
        break;
      case 3:
        newSchema = step3ValidationSchema;
        break;
      case 4:
        newSchema = createStep4ValidationSchema(
          formik.values.servicesInterested
        );
        break;
      case 5:
        newSchema = step5ValidationSchema;
        break;
      default:
        newSchema = Yup.object();
    }
    setValidationSchema(newSchema);
  }, [currentStep, formik.values.servicesInterested]);

  // Optional: Calculate score in real-time to show progress
  useEffect(() => {
    if (currentStep > 2) {
      const currentScore = calculateFitScore(formik.values);
      setFitScore(currentScore);
    }
  }, [formik.values, currentStep]);

  // Check if current step is valid
  const isStepValid = () => {
    const errors = formik.errors;
    const touched = formik.touched;

    switch (currentStep) {
      case 1:
        // Check all required fields for step 1
        const requiredFields = [
          "fullName",
          "companyName",
          "email",
          "phone",
          "country",
          "role",
          "decisionMaker",
        ];

        // Check if any required field has error and is touched
        for (const field of requiredFields) {
          if (errors[field] && touched[field]) {
            return false;
          }
        }

        // Check decisionMakerDetails if applicable
        if (
          formik.values.decisionMaker === "no" &&
          errors.decisionMakerDetails &&
          touched.decisionMakerDetails
        ) {
          return false;
        }
        return true;

      case 2:
        // Check goals and servicesInterested
        if (
          (errors.goals && touched.goals) ||
          (errors.servicesInterested && touched.servicesInterested)
        ) {
          return false;
        }
        return true;

      case 3:
        // Check all required fields for step 3
        const step3Fields = [
          "hasWebsite",
          "runsPaidAds",
          "crm",
          "responseTime",
          "biggestIssue",
        ];

        for (const field of step3Fields) {
          if (errors[field] && touched[field]) {
            return false;
          }
        }

        if (errors.enquiryChannels && touched.enquiryChannels) {
          return false;
        }
        return true;

      case 4:
        // Check conditional validations for step 4
        if (needsWebsiteQuestions) {
          if (
            (errors.websiteNeeds && touched.websiteNeeds) ||
            (errors.contentReady && touched.contentReady)
          ) {
            return false;
          }
        }
        if (needsAIQuestions) {
          if (
            (errors.aiLocation && touched.aiLocation) ||
            (errors.aiTasks && touched.aiTasks) ||
            (errors.aiLanguages && touched.aiLanguages)
          ) {
            return false;
          }
        }
        if (needsAutomationQuestions) {
          if (
            (errors.automationTasks && touched.automationTasks) ||
            (errors.communicationChannel && touched.communicationChannel)
          ) {
            return false;
          }
        }
        return true;

      case 5:
        // Check all required fields for step 5
        const step5Fields = [
          "startTimeline",
          "monthlyBudget",
          "setupBudget",
          "regulated",
          "consentContact",
        ];

        for (const field of step5Fields) {
          if (errors[field] && touched[field]) {
            return false;
          }
        }
        return true;

      default:
        return true;
    }
  };

  const handleNext = () => {
    // Validate all fields on current step before proceeding
    const fieldsToValidate = getFieldsForCurrentStep();

    // Set all fields as touched to show validation errors
    formik.setTouched({
      ...formik.touched,
      ...fieldsToValidate,
    });

    // Force validation
    formik.validateForm().then((errors) => {
      // Check if there are any errors for the fields we're validating
      const hasErrors = Object.keys(errors).some(
        (key) => fieldsToValidate[key]
      );

      if (!hasErrors) {
        setCurrentStep(currentStep + 1);
      }
    });
  };

  // Helper to get fields for current step
  const getFieldsForCurrentStep = () => {
    const touchedFields = {};

    switch (currentStep) {
      case 1:
        [
          "fullName",
          "companyName",
          "email",
          "phone",
          "country",
          "role",
          "decisionMaker",
        ].forEach((field) => {
          touchedFields[field] = true;
        });
        if (formik.values.decisionMaker === "no") {
          touchedFields["decisionMakerDetails"] = true;
        }
        break;
      case 2:
        touchedFields["goals"] = true;
        touchedFields["servicesInterested"] = true;
        break;
      case 3:
        [
          "hasWebsite",
          "runsPaidAds",
          "crm",
          "responseTime",
          "biggestIssue",
        ].forEach((field) => {
          touchedFields[field] = true;
        });
        touchedFields["enquiryChannels"] = true;
        break;
      case 4:
        if (needsWebsiteQuestions) {
          ["websiteNeeds", "contentReady"].forEach((field) => {
            touchedFields[field] = true;
          });
        }
        if (needsAIQuestions) {
          ["aiLocation", "aiLanguages"].forEach((field) => {
            touchedFields[field] = true;
          });
          touchedFields["aiTasks"] = true;
        }
        if (needsAutomationQuestions) {
          ["communicationChannel"].forEach((field) => {
            touchedFields[field] = true;
          });
          touchedFields["automationTasks"] = true;
        }
        break;
      case 5:
        [
          "startTimeline",
          "monthlyBudget",
          "setupBudget",
          "regulated",
          "consentContact",
        ].forEach((field) => {
          touchedFields[field] = true;
        });
        break;
    }

    return touchedFields;
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Handle field blur for real-time validation
  const handleFieldBlur = (fieldName) => {
    formik.setFieldTouched(fieldName, true, true);
  };

  // Get dynamic screen title
  const getScreenTitle = () => {
    switch (currentStep) {
      case 1:
        return "Contact & Business Basics";
      case 2:
        return "What Do You Want Help With?";
      case 3:
        return "Current Setup";
      case 4:
        return "Project Scope";
      case 5:
        return "Budget, Timeline & Compliance";
      default:
        return "";
    }
  };

  // Render qualification screens after submission
  if (isSubmitted) {
    switch (qualificationStatus) {
      case "qualified":
        return (
          <QualifiedScreen submittedName={submittedName} fitScore={fitScore} />
        );
      case "semi-qualified":
        return (
          <SemiQualifiedScreen
            submittedName={submittedName}
            fitScore={fitScore}
          />
        );
      case "not-qualified":
        return (
          <NotQualifiedScreen
            submittedName={submittedName}
            fitScore={fitScore}
          />
        );
      default:
        return <QualifiedScreen submittedName={submittedName} />;
    }
  }

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
      <Navigation />

      <main className="flex-grow flex items-center justify-center py-12 px-6 pt-32">
        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Sidebar/Context Area */}
          <div className="lg:col-span-4 flex flex-col gap-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Amica Smart Intake
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                2–3 minutes to help us understand your business and recommend
                the right AI growth system.
              </p>

              {/* Display current score if available (optional) */}
              {/* {fitScore > 0 && (
                <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Current Fit Score:{" "}
                    <span className="font-bold text-primary">{fitScore}</span>
                  </p>
                </div>
              )} */}
            </div>

            <div className="p-6 bg-white dark:bg-white/5 rounded-xl border border-primary/10 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <span className="material-icons text-primary">schedule</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">
                    Quick Process
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Takes approximately 2-3 minutes to complete.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <span className="material-icons text-primary">
                    verified_user
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">
                    Secure & Confidential
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Your information is encrypted and only used for your custom
                    proposal.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="p-6 bg-white dark:bg-white/5 rounded-xl border border-primary/10">
              <h4 className="font-bold mb-4 text-slate-900 dark:text-white">
                Contact Us
              </h4>
              <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-center space-x-3">
                  <span className="material-icons text-sm text-primary">
                    email
                  </span>
                  <a
                    href="mailto:growth@amica.digital"
                    className="hover:text-primary transition-colors"
                  >
                    growth@amica.digital
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="material-icons text-sm text-primary">
                    phone
                  </span>
                  <a
                    href="tel:+447808014132"
                    className="hover:text-primary transition-colors"
                  >
                    +44 7808 014132
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="material-icons text-sm text-primary">
                    location_on
                  </span>
                  <span>
                    378 Claremont Road, Manchester
                    <br />
                    M14 7WB
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Form Card */}
          <div
            className="lg:col-span-8 order-1 lg:order-2"
            ref={formContainerRef}
          >
            <div className="bg-white dark:bg-background-dark border border-primary/10 rounded-xl form-card-shadow overflow-hidden">
              <div className="p-8 lg:p-10">
                <div className="mb-8 border-b border-primary/5 pb-6">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">
                      {currentStep}
                    </span>
                    {getScreenTitle()}
                  </h2>

                  {/* Progress bar */}
                  <div className="mt-4 h-1 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <form onSubmit={formik.handleSubmit} className="space-y-6">
                  {/* SCREEN 1 - Contact & Business Basics */}
                  {currentStep === 1 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormInput
                        label="Full Name"
                        id="fullName"
                        name="fullName"
                        value={formik.values.fullName}
                        onChange={formik.handleChange}
                        onBlur={(e) => {
                          formik.handleBlur(e);
                          handleFieldBlur("fullName");
                        }}
                        error={formik.errors.fullName}
                        touched={formik.touched.fullName}
                        placeholder="John Doe"
                        required
                      />
                      <FormInput
                        label="Company Name"
                        id="companyName"
                        name="companyName"
                        value={formik.values.companyName}
                        onChange={formik.handleChange}
                        onBlur={(e) => {
                          formik.handleBlur(e);
                          handleFieldBlur("companyName");
                        }}
                        error={formik.errors.companyName}
                        touched={formik.touched.companyName}
                        placeholder="Acme Ltd"
                        required
                      />
                      <FormInput
                        label="Email"
                        type="email"
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={(e) => {
                          formik.handleBlur(e);
                          handleFieldBlur("email");
                        }}
                        error={formik.errors.email}
                        touched={formik.touched.email}
                        placeholder="john@company.com"
                        required
                      />
                      <FormInput
                        label="Phone / WhatsApp Number"
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={(e) => {
                          formik.handleBlur(e);
                          handleFieldBlur("phone");
                        }}
                        error={formik.errors.phone}
                        touched={formik.touched.phone}
                        placeholder="+44 7700 900000"
                        required
                      />
                      <FormInput
                        label="Country of Operation"
                        type="select"
                        id="country"
                        name="country"
                        value={formik.values.country}
                        onChange={formik.handleChange}
                        onBlur={(e) => {
                          formik.handleBlur(e);
                          handleFieldBlur("country");
                        }}
                        error={formik.errors.country}
                        touched={formik.touched.country}
                        options={[
                          { value: "uk", label: "UK" },
                          { value: "italy", label: "Italy" },
                          { value: "uae", label: "UAE" },
                          { value: "other", label: "Other" },
                        ]}
                        required
                      />
                      <FormInput
                        label="Website URL"
                        type="url"
                        id="website"
                        name="website"
                        value={formik.values.website}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="https://www.yourcompany.com"
                      />
                      <FormInput
                        label="Your Role"
                        type="select"
                        id="role"
                        name="role"
                        value={formik.values.role}
                        onChange={formik.handleChange}
                        onBlur={(e) => {
                          formik.handleBlur(e);
                          handleFieldBlur("role");
                        }}
                        error={formik.errors.role}
                        touched={formik.touched.role}
                        options={[
                          { value: "owner", label: "Owner/Director" },
                          { value: "manager", label: "Manager" },
                          { value: "marketing", label: "Marketing" },
                          { value: "operations", label: "Operations" },
                          { value: "other", label: "Other" },
                        ]}
                        required
                      />
                      <FormInput
                        label="Are you the decision maker?"
                        type="select"
                        id="decisionMaker"
                        name="decisionMaker"
                        value={formik.values.decisionMaker}
                        onChange={formik.handleChange}
                        onBlur={(e) => {
                          formik.handleBlur(e);
                          handleFieldBlur("decisionMaker");
                        }}
                        error={formik.errors.decisionMaker}
                        touched={formik.touched.decisionMaker}
                        options={[
                          { value: "yes", label: "Yes" },
                          { value: "no", label: "No" },
                          { value: "not-sure", label: "Not sure" },
                        ]}
                        required
                      />
                      {formik.values.decisionMaker === "no" && (
                        <FormInput
                          label="Decision Maker Name & Role"
                          id="decisionMakerDetails"
                          name="decisionMakerDetails"
                          value={formik.values.decisionMakerDetails}
                          onChange={formik.handleChange}
                          onBlur={(e) => {
                            formik.handleBlur(e);
                            handleFieldBlur("decisionMakerDetails");
                          }}
                          error={formik.errors.decisionMakerDetails}
                          touched={formik.touched.decisionMakerDetails}
                          placeholder="e.g. Jane Smith, CEO"
                          className="md:col-span-2"
                          required
                        />
                      )}
                    </div>
                  )}

                  {/* SCREEN 2 - What do you want help with? */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
                          What are you looking to achieve?{" "}
                          <span className="text-red-500">*</span>
                          <span className="text-xs font-normal text-slate-500 ml-2">
                            (choose up to 2)
                          </span>
                        </label>
                        {formik.touched.goals && formik.errors.goals && (
                          <p className="text-red-500 text-sm mb-2 flex items-center gap-1">
                            <span className="material-icons text-sm">
                              error
                            </span>
                            {formik.errors.goals}
                          </p>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {[
                            "More qualified leads",
                            "More bookings / enquiries",
                            "Improve conversion rate (website/funnel)",
                            "Automate follow-ups & admin",
                            "AI assistant / chatbot",
                            "Build/upgrade website or portal",
                            "SEO / Google visibility",
                            "Social media system / content engine",
                            "Compliance & trust (regulated industry)",
                          ].map((goal) => (
                            <label
                              key={goal}
                              className={`flex items-start gap-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                                formik.values.goals.includes(goal)
                                  ? "border-primary bg-primary/5"
                                  : "border-slate-200 dark:border-slate-700 hover:border-primary/50"
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={formik.values.goals.includes(goal)}
                                onChange={(e) => {
                                  const newGoals = e.target.checked
                                    ? [...formik.values.goals, goal].slice(0, 2)
                                    : formik.values.goals.filter(
                                        (g) => g !== goal
                                      );
                                  formik.setFieldValue("goals", newGoals);
                                  formik.setFieldTouched("goals", true, true);
                                }}
                                onBlur={() =>
                                  formik.setFieldTouched("goals", true, true)
                                }
                                className="mt-0.5"
                              />
                              <span className="text-sm">{goal}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
                          Which services are you interested in?{" "}
                          <span className="text-red-500">*</span>
                          <span className="text-xs font-normal text-slate-500 ml-2">
                            (multi-select)
                          </span>
                        </label>
                        {formik.touched.servicesInterested &&
                          formik.errors.servicesInterested && (
                            <p className="text-red-500 text-sm mb-2 flex items-center gap-1">
                              <span className="material-icons text-sm">
                                error
                              </span>
                              {formik.errors.servicesInterested}
                            </p>
                          )}
                        <div className="space-y-3">
                          {[
                            {
                              value: "growth-engine",
                              label: "Growth Engine (SEO + Ads + Funnel)",
                            },
                            {
                              value: "ai-automation",
                              label: "AI Automation (CRM + workflows)",
                            },
                            {
                              value: "ai-assistant",
                              label: "AI Virtual Assistant / AI Agents",
                            },
                            {
                              value: "websites",
                              label: "Websites / Portals / Custom software",
                            },
                            {
                              value: "content",
                              label: "Content system (repurposing)",
                            },
                            {
                              value: "compliance",
                              label: "Responsible AI / compliance support",
                            },
                          ].map((service) => (
                            <label
                              key={service.value}
                              className={`flex items-start gap-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                                formik.values.servicesInterested.includes(
                                  service.value
                                )
                                  ? "border-primary bg-primary/5"
                                  : "border-slate-200 dark:border-slate-700 hover:border-primary/50"
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={formik.values.servicesInterested.includes(
                                  service.value
                                )}
                                onChange={(e) => {
                                  const newServices = e.target.checked
                                    ? [
                                        ...formik.values.servicesInterested,
                                        service.value,
                                      ]
                                    : formik.values.servicesInterested.filter(
                                        (s) => s !== service.value
                                      );
                                  formik.setFieldValue(
                                    "servicesInterested",
                                    newServices
                                  );
                                  formik.setFieldTouched(
                                    "servicesInterested",
                                    true,
                                    true
                                  );
                                }}
                                onBlur={() =>
                                  formik.setFieldTouched(
                                    "servicesInterested",
                                    true,
                                    true
                                  )
                                }
                                className="mt-0.5"
                              />
                              <span className="text-sm font-medium">
                                {service.label}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SCREEN 3 - Current Setup */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <FormInput
                        label="Do you currently have a website?"
                        type="select"
                        id="hasWebsite"
                        name="hasWebsite"
                        value={formik.values.hasWebsite}
                        onChange={formik.handleChange}
                        onBlur={(e) => {
                          formik.handleBlur(e);
                          handleFieldBlur("hasWebsite");
                        }}
                        error={formik.errors.hasWebsite}
                        touched={formik.touched.hasWebsite}
                        options={[
                          { value: "yes", label: "Yes" },
                          { value: "no", label: "No" },
                          { value: "in-progress", label: "In progress" },
                        ]}
                        required
                      />

                      {formik.values.hasWebsite === "no" && (
                        <FormInput
                          label="Do you have a domain name?"
                          type="select"
                          id="hasDomain"
                          name="hasDomain"
                          value={formik.values.hasDomain}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          options={[
                            { value: "yes", label: "Yes" },
                            { value: "no", label: "No" },
                          ]}
                        />
                      )}

                      <FormInput
                        label="Do you run paid ads currently?"
                        type="select"
                        id="runsPaidAds"
                        name="runsPaidAds"
                        value={formik.values.runsPaidAds}
                        onChange={formik.handleChange}
                        onBlur={(e) => {
                          formik.handleBlur(e);
                          handleFieldBlur("runsPaidAds");
                        }}
                        error={formik.errors.runsPaidAds}
                        touched={formik.touched.runsPaidAds}
                        options={[
                          { value: "yes", label: "Yes" },
                          { value: "no", label: "No" },
                        ]}
                        required
                      />

                      {formik.values.runsPaidAds === "yes" && (
                        <FormInput
                          label="Monthly ad spend range"
                          type="select"
                          id="adSpend"
                          name="adSpend"
                          value={formik.values.adSpend}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          options={[
                            { value: "0-500", label: "£0–£500" },
                            { value: "500-1500", label: "£500–£1,500" },
                            { value: "1500-5000", label: "£1,500–£5,000" },
                            { value: "5000+", label: "£5,000+" },
                          ]}
                        />
                      )}

                      <FormInput
                        label="Do you have a CRM?"
                        type="select"
                        id="crm"
                        name="crm"
                        value={formik.values.crm}
                        onChange={formik.handleChange}
                        onBlur={(e) => {
                          formik.handleBlur(e);
                          handleFieldBlur("crm");
                        }}
                        error={formik.errors.crm}
                        touched={formik.touched.crm}
                        options={[
                          { value: "none", label: "None" },
                          { value: "hubspot", label: "HubSpot" },
                          { value: "zoho", label: "Zoho" },
                          { value: "salesforce", label: "Salesforce" },
                          { value: "other", label: "Other" },
                        ]}
                        required
                      />

                      {formik.values.crm === "other" && (
                        <FormInput
                          label="Which CRM?"
                          id="crmOther"
                          name="crmOther"
                          value={formik.values.crmOther}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          placeholder="Enter CRM name"
                        />
                      )}

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
                          How do enquiries arrive today?{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        {formik.touched.enquiryChannels &&
                          formik.errors.enquiryChannels && (
                            <p className="text-red-500 text-sm mb-2 flex items-center gap-1">
                              <span className="material-icons text-sm">
                                error
                              </span>
                              {formik.errors.enquiryChannels}
                            </p>
                          )}
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            "Phone calls",
                            "Website form",
                            "WhatsApp",
                            "Email",
                            "Social media DMs",
                            "Referral",
                            "Other",
                          ].map((channel) => (
                            <label
                              key={channel}
                              className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-colors ${
                                formik.values.enquiryChannels.includes(channel)
                                  ? "border-primary bg-primary/5"
                                  : "border-slate-200 dark:border-slate-700 hover:border-primary/50"
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={formik.values.enquiryChannels.includes(
                                  channel
                                )}
                                onChange={(e) => {
                                  const newChannels = e.target.checked
                                    ? [
                                        ...formik.values.enquiryChannels,
                                        channel,
                                      ]
                                    : formik.values.enquiryChannels.filter(
                                        (c) => c !== channel
                                      );
                                  formik.setFieldValue(
                                    "enquiryChannels",
                                    newChannels
                                  );
                                  formik.setFieldTouched(
                                    "enquiryChannels",
                                    true,
                                    true
                                  );
                                }}
                                onBlur={() =>
                                  formik.setFieldTouched(
                                    "enquiryChannels",
                                    true,
                                    true
                                  )
                                }
                              />
                              <span className="text-sm">{channel}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <FormInput
                        label="Average response time to new enquiries"
                        type="select"
                        id="responseTime"
                        name="responseTime"
                        value={formik.values.responseTime}
                        onChange={formik.handleChange}
                        onBlur={(e) => {
                          formik.handleBlur(e);
                          handleFieldBlur("responseTime");
                        }}
                        error={formik.errors.responseTime}
                        touched={formik.touched.responseTime}
                        options={[
                          { value: "under-5", label: "Under 5 minutes" },
                          { value: "within-1hr", label: "Within 1 hour" },
                          { value: "same-day", label: "Same day" },
                          { value: "next-day", label: "Next day" },
                          { value: "not-sure", label: "Not sure" },
                        ]}
                        required
                      />

                      <FormInput
                        label="Biggest issue right now"
                        type="select"
                        id="biggestIssue"
                        name="biggestIssue"
                        value={formik.values.biggestIssue}
                        onChange={formik.handleChange}
                        onBlur={(e) => {
                          formik.handleBlur(e);
                          handleFieldBlur("biggestIssue");
                        }}
                        error={formik.errors.biggestIssue}
                        touched={formik.touched.biggestIssue}
                        options={[
                          {
                            value: "not-enough-leads",
                            label: "Not enough leads",
                          },
                          {
                            value: "poor-quality",
                            label: "Lead quality is poor",
                          },
                          {
                            value: "slow-response",
                            label: "Slow response / no follow-up",
                          },
                          {
                            value: "no-conversion",
                            label: "Website doesn't convert",
                          },
                          {
                            value: "no-tracking",
                            label: "No tracking / don't know what works",
                          },
                          {
                            value: "need-automation",
                            label: "Need automation / reduce staff workload",
                          },
                          {
                            value: "compliance",
                            label: "Need compliance/trust improvements",
                          },
                        ]}
                        required
                      />
                    </div>
                  )}

                  {/* SCREEN 4 - Project Scope (Conditional) */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      {/* Website Questions */}
                      {needsWebsiteQuestions && (
                        <>
                          <FormInput
                            label="What do you need built?"
                            type="select"
                            id="websiteNeeds"
                            name="websiteNeeds"
                            value={formik.values.websiteNeeds}
                            onChange={formik.handleChange}
                            onBlur={(e) => {
                              formik.handleBlur(e);
                              handleFieldBlur("websiteNeeds");
                            }}
                            error={formik.errors.websiteNeeds}
                            touched={formik.touched.websiteNeeds}
                            options={[
                              {
                                value: "website",
                                label: "Website (5–10 pages)",
                              },
                              {
                                value: "landing",
                                label: "Landing page / funnel only",
                              },
                              {
                                value: "portal",
                                label: "Client portal / dashboard",
                              },
                              {
                                value: "custom",
                                label: "Custom software (workflow tool)",
                              },
                              {
                                value: "saas",
                                label: "SaaS / marketplace development",
                              },
                              {
                                value: "integrations",
                                label: "Integrations only",
                              },
                            ]}
                            required
                          />

                          <div>
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
                              Do you need any integrations?
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                              {[
                                "CRM",
                                "Payments",
                                "Booking system",
                                "WhatsApp",
                                "Email marketing",
                                "Accounting (Xero/QuickBooks)",
                                "Other",
                              ].map((integration) => (
                                <label
                                  key={integration}
                                  className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-colors ${
                                    formik.values.integrations.includes(
                                      integration
                                    )
                                      ? "border-primary bg-primary/5"
                                      : "border-slate-200 dark:border-slate-700 hover:border-primary/50"
                                  }`}
                                >
                                  <input
                                    type="checkbox"
                                    checked={formik.values.integrations.includes(
                                      integration
                                    )}
                                    onChange={(e) => {
                                      const newIntegrations = e.target.checked
                                        ? [
                                            ...formik.values.integrations,
                                            integration,
                                          ]
                                        : formik.values.integrations.filter(
                                            (i) => i !== integration
                                          );
                                      formik.setFieldValue(
                                        "integrations",
                                        newIntegrations
                                      );
                                    }}
                                  />
                                  <span className="text-sm">{integration}</span>
                                </label>
                              ))}
                            </div>
                          </div>

                          <FormInput
                            label="Do you have content ready?"
                            type="select"
                            id="contentReady"
                            name="contentReady"
                            value={formik.values.contentReady}
                            onChange={formik.handleChange}
                            onBlur={(e) => {
                              formik.handleBlur(e);
                              handleFieldBlur("contentReady");
                            }}
                            error={formik.errors.contentReady}
                            touched={formik.touched.contentReady}
                            options={[
                              { value: "yes", label: "Yes (text/images)" },
                              { value: "partially", label: "Partially" },
                              { value: "no", label: "No (need content help)" },
                            ]}
                            required
                          />
                        </>
                      )}

                      {/* AI Assistant Questions */}
                      {needsAIQuestions && (
                        <>
                          <FormInput
                            label="Where should the AI assistant work?"
                            type="select"
                            id="aiLocation"
                            name="aiLocation"
                            value={formik.values.aiLocation}
                            onChange={formik.handleChange}
                            onBlur={(e) => {
                              formik.handleBlur(e);
                              handleFieldBlur("aiLocation");
                            }}
                            error={formik.errors.aiLocation}
                            touched={formik.touched.aiLocation}
                            options={[
                              { value: "website", label: "Website chat" },
                              { value: "whatsapp", label: "WhatsApp" },
                              {
                                value: "social",
                                label: "Instagram/Facebook DMs",
                              },
                              { value: "email", label: "Email" },
                              {
                                value: "internal",
                                label: "Internal staff assistant",
                              },
                            ]}
                            required
                          />

                          <div>
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
                              Main tasks <span className="text-red-500">*</span>
                              <span className="text-xs font-normal text-slate-500 ml-2">
                                (choose up to 3)
                              </span>
                            </label>
                            {formik.touched.aiTasks &&
                              formik.errors.aiTasks && (
                                <p className="text-red-500 text-sm mb-2 flex items-center gap-1">
                                  <span className="material-icons text-sm">
                                    error
                                  </span>
                                  {formik.errors.aiTasks}
                                </p>
                              )}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {[
                                "Answer FAQs",
                                "Qualify leads",
                                "Book appointments",
                                "Collect documents/info",
                                "Customer support",
                                "Follow-ups & reminders",
                                "Internal admin support",
                              ].map((task) => (
                                <label
                                  key={task}
                                  className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-colors ${
                                    formik.values.aiTasks.includes(task)
                                      ? "border-primary bg-primary/5"
                                      : "border-slate-200 dark:border-slate-700 hover:border-primary/50"
                                  }`}
                                >
                                  <input
                                    type="checkbox"
                                    checked={formik.values.aiTasks.includes(
                                      task
                                    )}
                                    onChange={(e) => {
                                      const newTasks = e.target.checked
                                        ? [
                                            ...formik.values.aiTasks,
                                            task,
                                          ].slice(0, 3)
                                        : formik.values.aiTasks.filter(
                                            (t) => t !== task
                                          );
                                      formik.setFieldValue("aiTasks", newTasks);
                                      formik.setFieldTouched(
                                        "aiTasks",
                                        true,
                                        true
                                      );
                                    }}
                                    onBlur={() =>
                                      formik.setFieldTouched(
                                        "aiTasks",
                                        true,
                                        true
                                      )
                                    }
                                  />
                                  <span className="text-sm">{task}</span>
                                </label>
                              ))}
                            </div>
                          </div>

                          <FormInput
                            label="Languages required"
                            type="select"
                            id="aiLanguages"
                            name="aiLanguages"
                            value={formik.values.aiLanguages}
                            onChange={formik.handleChange}
                            onBlur={(e) => {
                              formik.handleBlur(e);
                              handleFieldBlur("aiLanguages");
                            }}
                            error={formik.errors.aiLanguages}
                            touched={formik.touched.aiLanguages}
                            options={[
                              { value: "english", label: "English only" },
                              {
                                value: "english-italian",
                                label: "English + Italian",
                              },
                              {
                                value: "english-arabic",
                                label: "English + Arabic",
                              },
                              { value: "other", label: "Other" },
                            ]}
                            required
                          />
                        </>
                      )}

                      {/* Automation Questions */}
                      {needsAutomationQuestions && (
                        <>
                          <div>
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
                              What should be automated?{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            {formik.touched.automationTasks &&
                              formik.errors.automationTasks && (
                                <p className="text-red-500 text-sm mb-2 flex items-center gap-1">
                                  <span className="material-icons text-sm">
                                    error
                                  </span>
                                  {formik.errors.automationTasks}
                                </p>
                              )}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {[
                                "Lead capture → CRM",
                                "Follow-up messages",
                                "Appointment booking",
                                "Pipeline updates",
                                "Review requests",
                                "Reporting dashboards",
                                "Staff task assignment",
                              ].map((task) => (
                                <label
                                  key={task}
                                  className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-colors ${
                                    formik.values.automationTasks.includes(task)
                                      ? "border-primary bg-primary/5"
                                      : "border-slate-200 dark:border-slate-700 hover:border-primary/50"
                                  }`}
                                >
                                  <input
                                    type="checkbox"
                                    checked={formik.values.automationTasks.includes(
                                      task
                                    )}
                                    onChange={(e) => {
                                      const newTasks = e.target.checked
                                        ? [
                                            ...formik.values.automationTasks,
                                            task,
                                          ]
                                        : formik.values.automationTasks.filter(
                                            (t) => t !== task
                                          );
                                      formik.setFieldValue(
                                        "automationTasks",
                                        newTasks
                                      );
                                      formik.setFieldTouched(
                                        "automationTasks",
                                        true,
                                        true
                                      );
                                    }}
                                    onBlur={() =>
                                      formik.setFieldTouched(
                                        "automationTasks",
                                        true,
                                        true
                                      )
                                    }
                                  />
                                  <span className="text-sm">{task}</span>
                                </label>
                              ))}
                            </div>
                          </div>

                          <FormInput
                            label="Main communication channel"
                            type="select"
                            id="communicationChannel"
                            name="communicationChannel"
                            value={formik.values.communicationChannel}
                            onChange={formik.handleChange}
                            onBlur={(e) => {
                              formik.handleBlur(e);
                              handleFieldBlur("communicationChannel");
                            }}
                            error={formik.errors.communicationChannel}
                            touched={formik.touched.communicationChannel}
                            options={[
                              { value: "email", label: "Email" },
                              { value: "whatsapp", label: "WhatsApp" },
                              { value: "sms", label: "SMS" },
                              { value: "phone", label: "Phone calls" },
                            ]}
                            required
                          />
                        </>
                      )}

                      {/* If no specific services selected */}
                      {!needsWebsiteQuestions &&
                        !needsAIQuestions &&
                        !needsAutomationQuestions && (
                          <div className="text-center py-12">
                            <span className="material-icons text-6xl text-slate-300 dark:text-slate-600 mb-4">
                              info
                            </span>
                            <p className="text-slate-500 dark:text-slate-400">
                              No specific project questions for the services you
                              selected. Click Continue to proceed.
                            </p>
                          </div>
                        )}
                    </div>
                  )}

                  {/* SCREEN 5 - Budget, Timeline & Compliance */}
                  {currentStep === 5 && (
                    <div className="space-y-6">
                      <FormInput
                        label="When do you want to start?"
                        type="select"
                        id="startTimeline"
                        name="startTimeline"
                        value={formik.values.startTimeline}
                        onChange={formik.handleChange}
                        onBlur={(e) => {
                          formik.handleBlur(e);
                          handleFieldBlur("startTimeline");
                        }}
                        error={formik.errors.startTimeline}
                        touched={formik.touched.startTimeline}
                        options={[
                          { value: "asap", label: "ASAP (0–2 weeks)" },
                          { value: "30days", label: "Within 30 days" },
                          { value: "30-60days", label: "30–60 days" },
                          { value: "60plus", label: "60+ days" },
                        ]}
                        required
                      />

                      <FormInput
                        label="Estimated monthly marketing/automation budget"
                        type="select"
                        id="monthlyBudget"
                        name="monthlyBudget"
                        value={formik.values.monthlyBudget}
                        onChange={formik.handleChange}
                        onBlur={(e) => {
                          formik.handleBlur(e);
                          handleFieldBlur("monthlyBudget");
                        }}
                        error={formik.errors.monthlyBudget}
                        touched={formik.touched.monthlyBudget}
                        options={[
                          { value: "under-200", label: "Under £200/month" },
                          { value: "200-500", label: "£200–£500/month" },
                          { value: "500-1000", label: "£500–£1,000/month" },
                          { value: "1000-3000", label: "£1,000–£3,000/month" },
                          { value: "3000plus", label: "£3,000+/month" },
                        ]}
                        required
                      />

                      <FormInput
                        label="One-off setup budget comfort"
                        type="select"
                        id="setupBudget"
                        name="setupBudget"
                        value={formik.values.setupBudget}
                        onChange={formik.handleChange}
                        onBlur={(e) => {
                          formik.handleBlur(e);
                          handleFieldBlur("setupBudget");
                        }}
                        error={formik.errors.setupBudget}
                        touched={formik.touched.setupBudget}
                        options={[
                          { value: "under-500", label: "Under £500" },
                          { value: "500-1500", label: "£500–£1,500" },
                          { value: "1500-3000", label: "£1,500–£3,000" },
                          { value: "3000-8000", label: "£3,000–£8,000" },
                          { value: "8000plus", label: "£8,000+" },
                        ]}
                        required
                      />

                      <FormInput
                        label="Are you in a regulated or sensitive-data industry?"
                        type="select"
                        id="regulated"
                        name="regulated"
                        value={formik.values.regulated}
                        onChange={formik.handleChange}
                        onBlur={(e) => {
                          formik.handleBlur(e);
                          handleFieldBlur("regulated");
                        }}
                        error={formik.errors.regulated}
                        touched={formik.touched.regulated}
                        options={[
                          { value: "healthcare", label: "Healthcare / clinic" },
                          { value: "care", label: "Care services" },
                          {
                            value: "recruitment",
                            label: "Recruitment Services",
                          },
                          {
                            value: "medical-tourism",
                            label: "Medical tourism",
                          },
                          { value: "finance-legal", label: "Finance / legal" },
                          { value: "not-regulated", label: "Not regulated" },
                          { value: "not-sure", label: "Not sure" },
                        ]}
                        required
                      />

                      <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                        <div>
                          <label className="flex items-start gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formik.values.consentContact}
                              onChange={formik.handleChange}
                              onBlur={() => handleFieldBlur("consentContact")}
                              name="consentContact"
                              required
                              className="mt-1"
                            />
                            <span className="text-sm">
                              <span className="text-red-500">*</span> I agree to
                              be contacted by Amica Digital Services about my
                              enquiry.
                            </span>
                          </label>
                          {formik.touched.consentContact &&
                            formik.errors.consentContact && (
                              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                <span className="material-icons text-sm">
                                  error
                                </span>
                                {formik.errors.consentContact}
                              </p>
                            )}
                        </div>

                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formik.values.consentMarketing}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name="consentMarketing"
                            className="mt-1"
                          />
                          <span className="text-sm">
                            I would like to receive updates and insights.
                            (optional)
                          </span>
                        </label>
                      </div>
                    </div>
                  )}

                  <div className="mt-12 flex items-center justify-between border-t border-primary/5 pt-8">
                    <button
                      type="button"
                      onClick={handleBack}
                      disabled={currentStep === 1}
                      className={`flex items-center gap-2 font-semibold transition-colors ${
                        currentStep === 1
                          ? "text-slate-300 dark:text-slate-700 cursor-not-allowed"
                          : "text-slate-500 dark:text-slate-400 hover:text-primary"
                      }`}
                    >
                      <span className="material-icons text-lg">arrow_back</span>
                      Back
                    </button>

                    {currentStep === totalSteps ? (
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        icon="send"
                        disabled={!isStepValid()}
                        className="transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                      >
                        Get My Quote
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        onClick={handleNext}
                        variant="primary"
                        size="lg"
                        icon="arrow_forward"
                        disabled={!isStepValid()}
                        className="transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                      >
                        Continue
                      </Button>
                    )}
                  </div>
                </form>
              </div>
            </div>
            <p className="mt-6 text-center text-xs text-slate-400 dark:text-slate-500">
              By continuing, you agree to our Terms of Service and Privacy
              Policy.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default IntakeForm;
